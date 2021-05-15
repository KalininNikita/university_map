import React from 'react';
import * as THREE from 'three';
import Models from './Models.js'; 

class MapModel extends React.Component {
    constructor(props) {
        super(props);
        //размеры
        this.width = this.props.Width;
        this.height = this.props.Height;
        this.angle1 = 0;
        this.angle2 = 0;
    }
    
    Model( floors, floor) {
        let scale = [1, 1, 1];
        //Выбор нужного этажа
        var f = 0;
        var arr = [];
        let position = [0, 0, 0];
        let rotation = [0, 0, 0];
        if (floor === "B1") {
            arr = floors[0];
            f = 4;
            position = [-5, 0, 0];
            rotation = [0, Math.PI, 0];
        }
        if (floor === "B2") {
            arr = floors[1];
            f = 4;
            position = [-5, 0, 9];
            rotation = [0, Math.PI, 0];
        }
        if (floor === "B3") {
            arr = floors[2];
            f = 5;
            position = [-5, 0, 19];
            rotation = [0, Math.PI, 0];
        }

        if (floor === "A0") {
            arr = floors[3];
            f = 3;
            position = [0, 35, 0];
            rotation = [0, Math.PI, 0];
        }
        if (floor === "A1") {
            arr = floors[4];
            f = 3;
            scale[0] = 1;
            position = [0, 35, 9];
            rotation = [0, Math.PI, 0];
        }
        if (floor === "A2") {
            arr = floors[5];
            f = 4;
            scale[0] = 1;
            position = [0, 35, 19];
            rotation = [0, Math.PI, 0];
        }
        if (floor === "A3") {
            arr = floors[6];
            f = 3;
            scale[0] = 1;
            position = [0, 35, 29];
            rotation = [0, Math.PI, 0];
        }
        if (floor === "A4") {
            arr = floors[7];
            f = 3;
            scale[0] = 1;
            position = [0, 35, 39];
            rotation = [0, Math.PI, 0];
        }
        if (floor === "A5") {
            arr = floors[8];
            f = 3;
            scale[0] = 1;
            position = [2, 35, 49];
            rotation = [0, Math.PI, 0];
        }

        if (floor === "M0") {
            arr = floors[9];
            f = 12;
            position = [10, -80, ];
            rotation = [0, Math.PI, Math.PI/2];
        }
        if (floor === "M1") {
            arr = floors[10];
            f = 13;
            position = [10, -80, 9];
            rotation = [0, Math.PI, Math.PI/2];
        }
        if (floor === "M2") {
            arr = floors[11];
            f = 13;
            position = [10, -80, 19];
            rotation = [0, Math.PI, Math.PI/2];
        }
        if (floor === "M3") {
            arr = floors[12];
            f = 12;
            position = [10, -80, 29];
            rotation = [0, Math.PI, Math.PI/2];
        }
        if (floor === "M4") {
            arr = floors[13];
            f = 8;
            position = [10, -80, 39];
            rotation = [0, Math.PI, Math.PI/2];
        }

        //
        let group = new THREE.Group();
        for (var i = 0; i < arr.length; i++) {
            var color = "rgb(255, 255, 255)";
            if (i >= f) color = "rgb(200, 200, 200)";

            var geometry = new THREE.BoxGeometry(arr[i][0], arr[i][1], arr[i][2]);
            var material = new THREE.MeshBasicMaterial({
                color: color
            });
            var mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(arr[i][3], arr[i][4], arr[i][5]);
            
            group.add( mesh );
        }
        
        group.scale.x = scale[0];
        group.scale.y = scale[1];
        group.scale.z = scale[2];
        group.rotateX(rotation[0]);
        group.rotateY(rotation[1]);
        group.rotateZ(rotation[2]);
        group.position.set(position[0], position[1], position[2]);
        this.scene.add(group);
    }
    
    DrawWay(){
        this.scene.clear();
        
        this.Model(Models, "B1");
        this.Model(Models, "B2");
        this.Model(Models, "B3");
        
        this.Model(Models, "M0");
        this.Model(Models, "M1");
        this.Model(Models, "M2");
        this.Model(Models, "M3");
        this.Model(Models, "M4");
        
        this.Model(Models, "A0");
        this.Model(Models, "A1");
        this.Model(Models, "A2");
        this.Model(Models, "A3");
        this.Model(Models, "A4");
        this.Model(Models, "A5");
        
        
        let material = new THREE.LineBasicMaterial( { color: 0xffb12b} );
        material.linewidth = 10;
        let points = [];
        this.props.Data.forEach(el => {
            let delte = (el.building === "A")? -10:0;
            points.push( new THREE.Vector3( el.x -100, el.y -80, el.floor * 10 + delte));
        });

        let geometry = new THREE.BufferGeometry().setFromPoints( points );

        let line = new THREE.Line( geometry, material );
        this.scene.add( line );
        
        if(this.props.Data.length > 0){
            let geometry = new THREE.SphereGeometry( 2, 16, 16 );
            
            let material2 = new THREE.MeshBasicMaterial( {color: 0x007aff} );
            let sphere2 = new THREE.Mesh( geometry, material2 );
            sphere2.position.set(this.props.Data[0].x -100, this.props.Data[0].y -80, this.props.Data[0].floor * 10);
            this.scene.add( sphere2 );
            
            let material3 = new THREE.MeshBasicMaterial( {color: 0x2ed159} );
            let sphere3 = new THREE.Mesh( geometry, material3 );
            sphere3.position.set(this.props.Data[this.props.Data.length-1].x - 100, this.props.Data[this.props.Data.length-1].y -80, this.props.Data[this.props.Data.length-1].floor * 10);
            this.scene.add( sphere3);
            
            let material1 = new THREE.MeshBasicMaterial( {color: 0xff2c55} );
            let sphere1 = new THREE.Mesh( geometry, material1 );
            sphere1.position.set(this.props.Data[this.props.CurrentDot].x - 100, this.props.Data[this.props.CurrentDot].y -80, this.props.Data[this.props.CurrentDot].floor * 10);
            this.scene.add( sphere1 );
        }
        
    }
    
    //события для мышки
    onElementMouseDown(event) {
        console.log(event);
        this.control = true;
        this.angle1Center = event.clientX - this.canvas.getBoundingClientRect().left;
        this.angle2Center = event.clientY - this.canvas.getBoundingClientRect().top;
    }
    onElementMouseMove(event) {
        if(this.control){
            this.angle1 = this.angle1Center - event.clientX + this.canvas.getBoundingClientRect().left;
            this.angle1Center = event.clientX - this.canvas.getBoundingClientRect().left;
            
            this.angle2 = this.angle2Center - event.clientY + this.canvas.getBoundingClientRect().top;
            this.angle2Center = event.clientY - this.canvas.getBoundingClientRect().top;
        }
    }
    onElementMouseUp(event) {
        this.control = false;
    }
    onElementOnscroll(event){
        let temp = this.camera.getFocalLength() + event.deltaY * -0.1;
        console.log(temp)
        if(temp < 10){temp = 10};
        if(temp > 150){temp = 150};
        this.camera.setFocalLength(temp);
    }
    
    onElementTouchstart(event) {
        console.log(event);
        this.control = true;
        this.angle1Center = event.touches[0].clientX - this.canvas.getBoundingClientRect().left;
        this.angle2Center = event.touches[0].clientY - this.canvas.getBoundingClientRect().top;
    }
    onElementTouchmove(event) {
        if(this.control){
            this.angle1 = this.angle1Center - event.touches[0].clientX + this.canvas.getBoundingClientRect().left;
            this.angle1Center = event.touches[0].clientX - this.canvas.getBoundingClientRect().left;
            
            this.angle2 = this.angle2Center - event.touches[0].clientY + this.canvas.getBoundingClientRect().top;
            this.angle2Center = event.touches[0].clientY - this.canvas.getBoundingClientRect().top;
        }
    }
    onElementTouchend(event) {
        this.control = false;
    }

    componentDidMount() {
        this.canvas = document.getElementById(this.props.ID);
        
        this.canvas.addEventListener('mousedown', this.onElementMouseDown.bind(this), false);
        this.canvas.addEventListener('mousemove', this.onElementMouseMove.bind(this), false);
        this.canvas.addEventListener('mouseup', this.onElementMouseUp.bind(this), false);
        this.canvas.addEventListener('wheel', this.onElementOnscroll.bind(this), false);
        
        
        this.canvas.addEventListener('touchstart', this.onElementTouchstart.bind(this), false);
        this.canvas.addEventListener('touchmove', this.onElementTouchmove.bind(this), false);
        this.canvas.addEventListener('touchend', this.onElementTouchend.bind(this), false);
        
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas
        });
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xf5f5f5 );
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000);
        this.camera.lookAt( 0, 0, 0 );
        this.camera.position.set(0, 0, 150);
        
        const light = new THREE.DirectionalLight( "#404040" ); // soft white light
        this.scene.add( light );
        
        let SpeedMove = 2;
        const animate = ()=>{
            requestAnimationFrame(animate);
            
            this.scene.rotation.z -= this.angle1*Math.PI/(180*SpeedMove);
            this.angle1 = 0;
            
            this.scene.rotation.x -= this.angle2*Math.PI/(180*SpeedMove);
            this.angle2 = 0;
            
            this.renderer.render(this.scene, this.camera);
        };
        
        this.Model(Models, "B1");
        this.Model(Models, "B2");
        this.Model(Models, "B3");
        
        this.Model(Models, "M0");
        this.Model(Models, "M1");
        this.Model(Models, "M2");
        this.Model(Models, "M3");
        this.Model(Models, "M4");
        
        this.Model(Models, "A0");
        this.Model(Models, "A1");
        this.Model(Models, "A2");
        this.Model(Models, "A3");
        this.Model(Models, "A4");
        this.Model(Models, "A5");
        
        animate();
    }
    render() {
        if(this.scene && (this.props.CurrentDot || this.props.CurrentDot === 0)){
            this.DrawWay();
        }
        return (
            <div>
                <canvas id={this.props.ID} width={this.width} height={this.height}/>
                <button 
                    style={{position: "absolute", left: 10, marginTop: 10}}
                    onClick={
                        () => {
                            this.camera.setFocalLength(this.camera.getFocalLength() + 3);
                        }
                    }>+</button>
                <button 
                    style={{position: "absolute", left: 40, marginTop: 10}}
                    onClick={
                    () => {
                        this.camera.setFocalLength(this.camera.getFocalLength() - 3);
                    }
                }>-</button>
            </div>
        );
    }
}

export default MapModel;