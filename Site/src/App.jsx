import React from 'react';
import s from './App.module.css';
import Panorama from './Components/Panorama/Panorama.jsx';
import MapModel from './Components/MapModel/MapModel.jsx';
import SearchItem from './Components/SearchItem/SearchItem.jsx';

import Data from './Data.js';

const NotIn = (arr1, arr2) => {
    let result = arr1.filter(el => {
            let ind = arr2.findIndex( (el_f) => {
                if(el_f.id === el.id){
                    return true;
                }else{
                    return false;
                }
            })
            if(ind >= 0){
                return false;
            }else{
                return true;
            }
        });
    return result;
}

const Search = (Graph, Start, End) => {
    Start.Length = 0;
    if(Start.id === End.id){
        return [Start];
    }
    let reachable = [];
    reachable = [...reachable, Start];
    let explored = [];
    
    while (reachable.length > 0){
        let node = Graph[(reachable.pop()).id];
    
        explored = [...explored, node];
        if(node.id === End.id){
            console.log("Путь найден");
            break;
        }
        /////
        let new_reachable = (node.Way).map(el => {
            let temp = Graph[el.Node];
            temp.Length = parseInt(node.Length) + parseInt(el.Length);
            return temp;
        });
        
        new_reachable = NotIn(new_reachable, explored);
        new_reachable.sort((a,b) => {
            if(a.Length > b.Length) return 1;
            if(a.Length < b.Length) return -1;
            return 0
        })
        
        ///
        new_reachable.forEach(el => {
            let ind = reachable.findIndex( (el_f) => {
                if(el_f.id === el.id){
                    return true;
                }else{
                    return false;
                }
            })
            if(ind >= 0){
                if(el.Length < reachable[ind].Length){
                    reachable[ind].Length = el.Length;
                    reachable[ind].previous = node;
                }
            }else{
                el.previous = node;
                reachable = [el, ...reachable];
            }
        });
        //console.log(reachable);
        //console.log(explored);
    };
    
    let result = [];
    explored.forEach(el => {
        result[el.id] = el;
    });
    let Path = [];
    Path = [...Path, result[End.id]];
    while (true) {
        Path = [Path[0].previous, ...Path];
        if (Path[0].id === Start.id) {
            break;
        }
    }
    Path[0].Length = 0;
    console.log(Path);
    for(let i = 1; i< Path.length; i++){
        let Node = Path[i].Way.find(el => {
            if(el.Node === Path[i-1].id){
                return true;
            }else{
                return false;
            }
        });
        Path[i].Length = Node.Length;
    }
    console.log(Path);
    return Path;
}

class Route extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Start: null,
            End: null,
            Check: false,
            Path: [],
            CurrentDotIndex: null
        }
    }
    
    SetStart(node){
        this.setState({
            Start: node,
            Check: false
        })
    }
    SetEnd(node){
        this.setState({
            End: node,
            Check: false
        })
    }
    SetPath(Path){
        this.setState({
            Path: Path,
            CurrentDotIndex: 0
        })
    }
    SetCurrentDotIndex(ind){
        this.setState({
            CurrentDotIndex: ind
        })
    }
    
    render() {
        return (
            <div>
                <div className={s.Scene}>
                    <MapModel ID={"MapModel"} Width = {window.innerWidth} Height={200} Data={this.state.Path} CurrentDot={this.state.CurrentDotIndex}/>
                </div>
                {
                    this.state.Path.length === 0 &&
                    <div>
                        <div className={s.TitleMode}>
                            {"Постройте маршрут"}
                        </div>
                        <div>
                            <SearchItem 
                                className={s.SearchItem} 
                                Data={this.props.Data} 
                                Check={this.state.Check}
                                SetVertex={this.SetStart.bind(this)}
                                placeholder={"Откуда"} 
                                ColorCircle={"#007AFF"}/>
                            <SearchItem 
                                className={s.SearchItem} 
                                Data={this.props.Data} 
                                Check={this.state.Check}
                                SetVertex={this.SetEnd.bind(this)} 
                                placeholder={"Куда"} 
                                ColorCircle={"#2FD159"}/>
                        </div>
                        <div>
                            <button 
                                className={s.CreateWay}
                                onClick={() => {
                                    if(this.state.Start && this.state.End){
                                        this.SetPath(Search(this.props.Data, this.state.Start, this.state.End));    
                                    }else{
                                        this.setState({
                                            Check: true
                                        });
                                    }}}>
                                Построить
                            </button>
                        </div>
                    </div>
                }
                
                {
                    this.state.Path.length > 0 &&
                        <div>
                            <div className={s.WayListTitle}>    
                                <div
                                    style={{margin: "0px 10px 0px 0px", cursor: "pointer"}}
                                    onClick={() => {
                                        this.SetPath([]);
                                        this.setState({
                                            Start: null,
                                            End: null
                                        })
                                    }}>
                                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.92308 14L1 7.5L7.92308 1M1.96154 7.5H16" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                Маршрут построен</div>
                            <div className={s.WayList}>
                                {
                                this.state.Path.map((el, ind) => {
                                    return (
                                            <div key={ind}>
                                                { ind !== 0 &&
                                                    <div
                                                        className={s.LengthPath}
                                                        style={{color: "#B0B0B0"}}>{" ≈ "} {el.Length} {" м"}</div>}
                                                {
                                                    this.state.CurrentDotIndex === ind? 
                                                    <div
                                                        className={s.CurrentDot}
                                                        onClick={() => this.SetCurrentDotIndex(ind)}>
                                                        <div style={{width: "14px", margin: "0px 2px"}}>
                                                            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4.99655 0C3.67075 0.0018383 2.39987 0.532566 1.46304 1.47563C0.526199 2.41868 -1.26117e-06 3.69697 0 5.02973C0 7.80476 4.99655 14 4.99655 14C4.99655 14 10 7.80476 10 5.02973C10 3.69576 9.47285 2.41643 8.53452 1.47317C7.59619 0.529917 6.32355 0 4.99655 0V0ZM4.99655 7.38157C4.54066 7.38157 4.095 7.24567 3.71594 6.99106C3.33688 6.73644 3.04143 6.37456 2.86697 5.95115C2.69251 5.52775 2.64686 5.06185 2.7358 4.61237C2.82474 4.16289 3.04428 3.75001 3.36664 3.42595C3.68901 3.10189 4.09973 2.88121 4.54686 2.7918C4.99399 2.70239 5.45746 2.74828 5.87865 2.92366C6.29984 3.09904 6.65984 3.39603 6.91312 3.77708C7.1664 4.15814 7.30159 4.60613 7.30159 5.06442C7.30159 5.36871 7.24197 5.67002 7.12613 5.95115C7.01029 6.23228 6.8405 6.48772 6.62646 6.70289C6.41242 6.91806 6.15831 7.08874 5.87865 7.20518C5.59899 7.32163 5.29925 7.38157 4.99655 7.38157V7.38157Z" fill="#FF2C55"/>
                                                                </svg>
                                                        </div>
                                                        {el.FullName}
                                                    </div>:
                                                    <div
                                                        className={s.NotCurrentDot}
                                                        onClick={() => this.SetCurrentDotIndex(ind)}>
                                                        {el.FullName}
                                                    </div>
                                                }
                                            </div>
                                    )      
                                })
                                }
                            </div>
                        </div>
                }
            </div>
        )
            
    }
}

class Walk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CurrentDot: null
        }
    }
    
    SetDot(node){
        this.setState({
            CurrentDot: node
        });
        console.log(node);
    }
    render() {
        return ( 
            <div>
                <div className={s.TitleMode}>
                       {"Начните прогулку"}
                </div>
                <div>
                    <SearchItem className={s.SearchItem} Data={this.props.Data} SetVertex={this.SetDot.bind(this)} placeholder={"Откуда"} Vertex={this.state.CurrentDot}/>
                </div>
                <div className={s.Scene}>
                    <Panorama ID={"Panorama"} Width = {window.innerWidth} Height={200}/>
                </div>
                { this.state.CurrentDot &&
                    <div className={s.SelectNextItenWay}>
                        {
                            this.state.CurrentDot.Way.map((el, ind)=> {
                                return (
                                    <button key={ind} className={s.MoveItem} onClick={() => this.SetDot(this.props.Data[el.Node])}>
                                        {this.props.Data[el.Node].FullName}
                                    </button>
                                )
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Start: null,
            End: null,
            Path: [],
            Mode: "Route"
        }
        /*
        this.Data = [];
        Object.values(Data.vertex).forEach(el => {
            this.Data.[el.id] = {...el, FullName: "Корпус " +el.building +" этаж "+ el.floor +" "+ el.name};
        });
        */
       
        this.Data = [];
        Object.values(Data.vertex).forEach(el => {
            this.Data[el.id] = {...el, 
                                FullName: "Корпус " +el.building +" этаж "+ el.floor +" "+ el.name,
                                Way: {},
                                floor: (el.building === "Б")? el.floor-1: el.floor};
        });
        Data.edge.forEach(el => {
           this.Data[parseInt(el.A)].Way[el.B] = ({Node: el.B ,Length: el.Расстояние});
           this.Data[parseInt(el.B)].Way[el.A] = ({Node: el.A ,Length: el.Расстояние});
        });
        
        this.Data.forEach(el => {
            el.Way = Object.values(el.Way);
        });
    
        console.log(this.Data[50]);
        //console.log(this.Data);
        /*
        let ind;
        this.Data.forEach((el1, ind1) => {
            if(ind1 < 51){
                this.Data.forEach((el2, ind2) => {
                    console.log(el1.id + " ->" + el2.id);
                    let a = Search(this.Data, {...el1}, {...el2});
                });
            } 
        });
        */
    }
    
    render() {
        return ( 
            <div className = {s.App} >
                <div className={s.ControlPanel}>
                    <div className={s.Modes}>
                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" 
                            onClick={() => this.setState({Mode: "Route"})}>
                            <rect x="0.5" y="0.5" width="54" height="54" rx="27" 
                                fill={(this.state.Mode === "Route")? "#007AFF": "white"} 
                                stroke={(this.state.Mode === "Route")? "#007AFF": "#4D4D4D"}
                                strokeWidth="0.5"/>
                            <path d="M21.7009 29.5697C21.3565 29.774 21.125 30.1495 21.125 30.5781C21.125 31.2243 21.6507 31.75 22.2969 31.75C22.8061 31.75 23.2403 31.4234 23.4016 30.9688H26.4375C27.0837 30.9688 27.6094 31.4945 27.6094 32.1406C27.6094 32.7868 27.0837 33.3125 26.4375 33.3125H21.75C20.673 33.3125 19.7969 34.1887 19.7969 35.2656C19.7969 36.3426 20.673 37.2188 21.75 37.2188H25.6562C25.872 37.2188 26.0469 37.0439 26.0469 36.8281C26.0469 36.6124 25.872 36.4375 25.6562 36.4375H21.75C21.1038 36.4375 20.5781 35.9118 20.5781 35.2656C20.5781 34.6195 21.1038 34.0938 21.75 34.0938H26.4375C27.5145 34.0938 28.3906 33.2176 28.3906 32.1406C28.3906 31.0637 27.5145 30.1875 26.4375 30.1875H23.4016C23.3092 29.927 23.1272 29.7087 22.8928 29.5697L25.8763 24.6745C26.3457 23.9691 26.5938 23.147 26.5938 22.2969C26.5938 19.9276 24.6662 18 22.2969 18C19.9276 18 18 19.9276 18 22.2969C18 23.147 18.2481 23.9691 18.7174 24.6745L21.7009 29.5697ZM22.2969 30.9688C22.0815 30.9688 21.9062 30.7935 21.9062 30.5781C21.9062 30.3627 22.0815 30.1875 22.2969 30.1875C22.5123 30.1875 22.6875 30.3627 22.6875 30.5781C22.6875 30.7935 22.5123 30.9688 22.2969 30.9688ZM22.2969 18.7812C24.2354 18.7812 25.8125 20.3584 25.8125 22.2969C25.8125 22.9948 25.6083 23.6693 25.2221 24.2475C25.2191 24.252 25.2161 24.2565 25.2133 24.2612L22.2969 29.0463C22.2969 29.0463 19.3747 24.252 19.3717 24.2475C18.9854 23.6693 18.7812 22.9948 18.7812 22.2969C18.7812 20.3584 20.3584 18.7812 22.2969 18.7812Z" 
                                fill={(this.state.Mode === "Route")? "white": "#4D4D4D"}/>
                            <path d="M22.2969 24.25C23.3738 24.25 24.25 23.3738 24.25 22.2969C24.25 21.2199 23.3738 20.3438 22.2969 20.3438C21.2199 20.3438 20.3438 21.2199 20.3438 22.2969C20.3438 23.3738 21.2199 24.25 22.2969 24.25ZM22.2969 21.125C22.943 21.125 23.4688 21.6507 23.4688 22.2969C23.4688 22.943 22.943 23.4688 22.2969 23.4688C21.6507 23.4688 21.125 22.943 21.125 22.2969C21.125 21.6507 21.6507 21.125 22.2969 21.125Z" 
                                fill={(this.state.Mode === "Route")? "white": "#4D4D4D"}/>
                            <path d="M33.7031 24.4844C31.3338 24.4844 29.4062 26.412 29.4062 28.7812C29.4062 29.6328 29.6551 30.4561 30.1259 31.1623L33.0983 35.8248C32.8682 35.964 32.6897 36.1803 32.5985 36.4375H29.1719C28.9561 36.4375 28.7812 36.6124 28.7812 36.8281C28.7812 37.0439 28.9561 37.2188 29.1719 37.2188H32.5984C32.7597 37.6734 33.1939 38 33.7031 38C34.3493 38 34.875 37.4743 34.875 36.8281C34.875 36.4031 34.6475 36.0302 34.308 35.8248L37.2804 31.1623C37.7511 30.4561 38 29.6328 38 28.7812C38 26.412 36.0724 24.4844 33.7031 24.4844ZM33.7031 37.2188C33.4877 37.2188 33.3125 37.0435 33.3125 36.8281C33.3125 36.6127 33.4877 36.4375 33.7031 36.4375C33.9185 36.4375 34.0938 36.6127 34.0938 36.8281C34.0938 37.0435 33.9185 37.2188 33.7031 37.2188ZM36.6283 30.7318C36.6268 30.7342 33.7031 35.3202 33.7031 35.3202C33.7031 35.3202 30.7795 30.7341 30.7779 30.7318C30.3917 30.1537 30.1875 29.4792 30.1875 28.7812C30.1875 26.8427 31.7646 25.2656 33.7031 25.2656C35.6416 25.2656 37.2188 26.8427 37.2188 28.7812C37.2188 29.4792 37.0146 30.1537 36.6283 30.7318Z" 
                                fill={(this.state.Mode === "Route")? "white": "#4D4D4D"}/>
                            <path d="M33.7031 26.8281C32.6262 26.8281 31.75 27.7043 31.75 28.7812C31.75 29.8582 32.6262 30.7344 33.7031 30.7344C34.7801 30.7344 35.6562 29.8582 35.6562 28.7812C35.6562 27.7043 34.7801 26.8281 33.7031 26.8281ZM33.7031 29.9531C33.057 29.9531 32.5312 29.4274 32.5312 28.7812C32.5312 28.1351 33.057 27.6094 33.7031 27.6094C34.3493 27.6094 34.875 28.1351 34.875 28.7812C34.875 29.4274 34.3493 29.9531 33.7031 29.9531Z" 
                                fill={(this.state.Mode === "Route")? "white": "#4D4D4D"}/>
                            <path d="M27.4141 37.2188C27.6298 37.2188 27.8047 37.0439 27.8047 36.8281C27.8047 36.6124 27.6298 36.4375 27.4141 36.4375C27.1983 36.4375 27.0234 36.6124 27.0234 36.8281C27.0234 37.0439 27.1983 37.2188 27.4141 37.2188Z" 
                                fill={(this.state.Mode === "Route")? "white": "#4D4D4D"}/>
                        </svg>
                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"
                            onClick={() => this.setState({Mode: "Walk"})}>
                            <rect x="0.25" y="0.25" width="54.5" height="54.5" rx="27.25" 
                                fill={(this.state.Mode === "Route")? "white": "#007AFF"} 
                                stroke={(this.state.Mode === "Route")? "#4D4D4D": "#007AFF"} strokeWidth="0.5"/>
                            <path d="M35.0534 21.1203C34.8817 21.073 34.7044 21.1749 34.6574 21.3483C34.6104 21.5216 34.7113 21.7006 34.883 21.7483C37.0575 22.3502 38.3556 23.2043 38.3556 24.0329V24.0376C38.3556 24.3694 38.1373 24.8864 37.0969 25.4642C36.276 25.9201 35.113 26.3107 33.7205 26.5994C33.6277 26.6186 33.5339 26.6374 33.439 26.6557C33.2873 26.685 33.1774 26.8193 33.1774 26.9755V29.9331C32.6369 29.8382 32.0727 29.759 31.4923 29.6954L31.6241 27.7925C31.6365 27.6131 31.5027 27.4576 31.3252 27.4451C31.1479 27.4327 30.9937 27.5677 30.9812 27.7471L30.8057 30.2826C30.7808 30.6381 30.4852 30.9167 30.1329 30.9167H29.9616C29.7949 30.9167 29.6557 31.045 29.6406 31.2127L29.1173 37.0224H26.8829L26.3597 31.2127C26.3446 31.045 26.2055 30.9167 26.0388 30.9167H25.8674C25.5149 30.9167 25.2195 30.6381 25.1947 30.2831L24.8531 25.3516C24.8219 24.9001 24.9731 24.4691 25.2786 24.1382C25.5841 23.8074 25.9988 23.6253 26.4465 23.6253H29.5537C30.0013 23.6253 30.4161 23.8074 30.7216 24.1382C31.0272 24.4691 31.1785 24.9001 31.1472 25.3514L31.0715 26.4438C31.0591 26.6232 31.1929 26.7786 31.3705 26.7912C31.5476 26.8032 31.702 26.6686 31.7144 26.4892L31.7901 25.3969C31.8332 24.7724 31.6155 24.1519 31.1929 23.6941C30.8033 23.2725 30.265 23.017 29.6982 22.9797C30.2362 22.5043 30.5779 21.808 30.5824 21.0321C31.6645 21.1195 32.7002 21.2609 33.6502 21.4545C33.8247 21.4899 33.9946 21.3758 34.0297 21.1996C34.0649 21.0235 33.9521 20.8517 33.7776 20.8163C32.7644 20.6098 31.658 20.461 30.5025 20.3728C30.2152 19.236 29.1829 18.408 28.0001 18.408C26.8173 18.408 25.7852 19.236 25.498 20.3718C23.5677 20.5186 21.7939 20.8348 20.3521 21.2978C18.1592 22.0021 17 22.9478 17 24.0329V33.2682C17 34.1876 17.8661 34.8616 18.5925 35.2653C19.5268 35.7841 20.8571 36.2199 22.44 36.5258C22.4601 36.5297 22.4804 36.5316 22.5005 36.5316C22.5749 36.5316 22.6476 36.5056 22.7058 36.457C22.7798 36.3951 22.8228 36.3032 22.8228 36.206V33.9152C22.8228 33.7355 22.6785 33.5898 22.5005 33.5898C22.3226 33.5898 22.1783 33.7355 22.1783 33.9152V35.8088C20.8306 35.5225 19.704 35.1396 18.9031 34.6947C17.8627 34.1169 17.6445 33.6 17.6445 33.2682V25.3529C17.6447 25.3533 17.645 25.3534 17.6454 25.3538C17.6781 25.3855 17.7118 25.4163 17.7459 25.4467C17.7504 25.4508 17.755 25.455 17.7597 25.4589C17.7926 25.4879 17.826 25.5162 17.8599 25.544C17.8661 25.5491 17.8723 25.5542 17.8787 25.5593C17.9124 25.5867 17.9467 25.6135 17.9812 25.6396C17.9866 25.6437 17.9921 25.6478 17.9977 25.6518C18.0338 25.679 18.0702 25.7058 18.107 25.7315C18.1073 25.7317 18.1076 25.732 18.108 25.7324C18.1449 25.7581 18.182 25.7832 18.2191 25.8078C18.2241 25.8114 18.2293 25.8148 18.2345 25.8183C18.2703 25.8417 18.3059 25.8644 18.3416 25.8867C18.348 25.8907 18.3545 25.8946 18.3609 25.8987C18.3965 25.9207 18.4321 25.9421 18.4673 25.963C18.4725 25.9658 18.4776 25.9687 18.4826 25.9718C18.5195 25.9933 18.5563 26.0143 18.5925 26.0345C19.0889 26.3102 19.697 26.5625 20.3952 26.7842C20.628 26.8581 20.8707 26.9285 21.1228 26.9955C21.2909 27.0401 21.4629 27.0831 21.639 27.1243C21.8149 27.1655 21.9948 27.2052 22.1783 27.243V32.6133C22.1783 32.7932 22.3226 32.9388 22.5005 32.9388C22.6785 32.9388 22.8228 32.7932 22.8228 32.6133V30.5944C23.376 30.4943 23.9555 30.4109 24.5532 30.345C24.6062 30.9901 25.1158 31.5021 25.7439 31.5618L26.2677 37.3774C26.2828 37.5451 26.422 37.6734 26.5887 37.6734H29.4113C29.578 37.6734 29.7172 37.5451 29.7323 37.3774L30.2561 31.5618C30.8842 31.5019 31.3936 30.9902 31.4468 30.345C32.0447 30.4109 32.624 30.4943 33.1774 30.5944V36.2062C33.1774 36.3032 33.2202 36.3951 33.2942 36.457C33.3524 36.5056 33.4253 36.5317 33.4995 36.5317C33.5196 36.5317 33.5399 36.5297 33.56 36.5258C35.143 36.2199 36.4734 35.7841 37.4075 35.2653C38.1341 34.8617 39 34.1876 39 33.2682V24.0329C39.0002 22.8593 37.5985 21.8249 35.0534 21.1203ZM26.0831 20.7288C26.2216 19.7767 27.0457 19.0588 28.0001 19.0588C28.9545 19.0588 29.7786 19.7767 29.9174 20.73C29.9312 20.8229 29.9382 20.9192 29.9382 21.0165C29.9382 22.096 29.0688 22.9743 28.0001 22.9743C26.9314 22.9743 26.0619 22.096 26.0619 21.0165C26.0619 20.9192 26.069 20.8229 26.0831 20.7288ZM22.5611 26.6557C21.0438 26.3626 19.7789 25.9504 18.9032 25.464C17.8627 24.8862 17.6445 24.3694 17.6445 24.0376V24.0329C17.6445 23.2925 18.7297 22.5019 20.5473 21.9182C21.9116 21.4799 23.588 21.1774 25.4179 21.0308C25.4219 21.8071 25.7638 22.5039 26.3021 22.9795C25.7351 23.017 25.1969 23.2723 24.8074 23.6941C24.3848 24.1517 24.1671 24.7724 24.2101 25.3969L24.5078 29.6954C23.9276 29.759 23.3633 29.8382 22.8228 29.9331V26.9755C22.8228 26.8193 22.713 26.685 22.5611 26.6557ZM38.3556 33.2682C38.3556 33.6 38.1373 34.1169 37.0969 34.6947C36.296 35.1396 35.1694 35.5225 33.8219 35.8088V27.243C35.2899 26.9405 36.5254 26.5245 37.4076 26.0345C37.4437 26.0145 37.4801 25.9936 37.5169 25.9721C37.5223 25.9689 37.5278 25.9658 37.5332 25.9626C37.5683 25.9421 37.6035 25.9207 37.6389 25.899C37.6456 25.8948 37.6522 25.8907 37.6589 25.8865C37.6945 25.8644 37.7301 25.8417 37.7655 25.8183C37.7708 25.8149 37.7761 25.8114 37.7814 25.8078C37.8183 25.7834 37.8553 25.7583 37.892 25.7325C37.8924 25.7322 37.8929 25.7319 37.8934 25.7315C37.93 25.7058 37.9662 25.6791 38.0025 25.6522C38.008 25.6479 38.0136 25.6439 38.0191 25.6396C38.0535 25.6135 38.0876 25.5867 38.1215 25.5594C38.1277 25.5544 38.1341 25.5491 38.1405 25.544C38.1742 25.5162 38.2076 25.4881 38.2405 25.4591C38.2452 25.455 38.2499 25.4508 38.2546 25.4465C38.2883 25.4163 38.3217 25.3858 38.3541 25.3545C38.3546 25.354 38.3553 25.3534 38.3558 25.3531V33.2682H38.3556Z" 
                                fill={(this.state.Mode === "Route")? "#4D4D4D": "white"}/>
                        </svg>
                    </div>
                    {
                        (this.state.Mode === "Route") && <Route Data={this.Data}/>
                    }
                    {
                        (this.state.Mode === "Walk") && <Walk Data={this.Data}/>
                    }
                </div>
            </div>
        );
    }
}

export default App;
