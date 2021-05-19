import React from 'react';
import s from './SearchItem.module.css';

class SearchItem extends React.Component {
    constructor(props) {
        super(props);
        this.Ref = React.createRef();
        this.state = {
            CurrentVertex: null,
            CurrentValue: null,
            CurrentList: Object.values(this.props.Data),
            SelectorVisibility: false,
            Focuse: false
        }
        this.SetVertexId = this.SetVertexId.bind(this);
    }
    ChangeValue(event) {
        this.setState({
            CurrentVertex: null,
            CurrentValue: event.target.value
        });
        this.ChangeSelectorVisibility(true);
    }
    SetVertexId(CurrentVertex){
        this.Ref.current.value = CurrentVertex.FullName;
        this.setState({
            CurrentVertex: CurrentVertex, 
            CurrentValue: CurrentVertex.FullName
        });
        this.ChangeSelectorVisibility(false);
        this.props.SetVertex(CurrentVertex);
    }
    ChangeSelectorVisibility(flag){
        if(flag != this.state.SelectorVisibility){
            this.setState({
                SelectorVisibility: flag
            });
        }
    }
    render() {
        if(this.props.Vertex && this.props.Vertex.id !== this.state.CurrentValue.id && !this.state.SelectorVisibility){
            this.Ref.current.value = this.props.Vertex.FullName;
        }
        return (
            <div className={s.SearchItem}>
                <div 
                    className={s.Input}
                    style={{borderColor: (this.state.CurrentVertex === null && (this.props.Check || this.state.Focuse))? "#FF2C55": null}}
                    >
                    <div className={s.Circle}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill={this.props.ColorCircle}/>
                            <circle cx="5" cy="5" r="2" fill="white"/>
                        </svg>
                    </div>
                    <input 
                        ref={this.Ref}

                        defaultValue={this.state.CurrentValue}
                        onChange={this.ChangeValue.bind(this)}
                        placeholder={this.props.placeholder}
                        onFocus={() => {
                            if(!this.state.Focuse){
                                this.setState({Focuse: true});
                            }}
                        }/>
                </div>
                
                {this.state.SelectorVisibility &&
                    <div 
                        className={s.ListVertices}>
                        {this.state.CurrentValue != "" &&
                            <div>
                                {this.state.CurrentList.filter(el => {
                                    if((el.FullName).indexOf(this.state.CurrentValue) >= 0){
                                        return true;
                                    }else{
                                        return false;
                                    }
                                    }).map((el, ind) => 
                                    <div key={ind} onClick={() => {this.SetVertexId(el)}} className={s.ListItem}>{el.FullName}</div>
                                )}
                            </div>}
                    </div>
                }
                    
            </div>
        );
    }
}

export default SearchItem;