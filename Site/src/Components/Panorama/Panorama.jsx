import React from 'react';
import * as THREE from 'three';

class Panorama extends React.Component {
    constructor(props) {
        super(props);
        //размеры
        this.width = this.props.Width;
        this.height = this.props.Height;
        //управеление камерой
        this.control = false;
    }
    //события для мышки
    onElementMouseDown(event) {
        this.control = true;
        this.AngleX = (event.clientX - this.width/2);
    }
    onElementMouseMove(event) {
        if(this.control){
            let DeltaAngleX = this.AngleX - (event.clientX - this.width/2);
            this.camera.rotation.y -= (DeltaAngleX * Math.PI)/(180);
            this.AngleX = (event.clientX - this.width/2);
        }
    }
    onElementMouseUp(event) {
        this.control = false;
    }
    
    //события для касания экрана телефона
    onElementTouchStart(event) {
        this.control = true;
        this.AngleX = parseInt((event.touches[0].clientX - this.width/2));
    }
    onElementTouchMove(event) {
        if(this.control){
            let DeltaAngleX = this.AngleX - parseInt((event.touches[0].clientX - this.width/2));
            this.camera.rotation.y -= (DeltaAngleX * Math.PI)/(180);
            this.AngleX = parseInt((event.touches[0].clientX - this.width/2));
        }
    }
    onElementTouchEnd(event) {
        this.control = false;
    }
    
    //для изменения картики
    ChangeImage(){
        const loader = new THREE.TextureLoader();
        this.sphere.material = new THREE.MeshBasicMaterial({
            map: loader.load('Assets/Panoramas/panorama2.png'),
            side: THREE.BackSide,
            needsUpdate: true
        });
    }
    //создание сцены и запуск рендеринга
    componentDidMount() {
        this.canvas = document.getElementById(this.props.ID);
        
        this.canvas.addEventListener('mousedown', this.onElementMouseDown.bind(this), false);
        this.canvas.addEventListener('mousemove', this.onElementMouseMove.bind(this), false);
        this.canvas.addEventListener('mouseup', this.onElementMouseUp.bind(this), false);
        
        this.canvas.addEventListener("touchstart", this.onElementTouchStart.bind(this), false);
        this.canvas.addEventListener("touchmove", this.onElementTouchMove.bind(this), false);
        this.canvas.addEventListener("touchend", this.onElementTouchEnd.bind(this), false);

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas
        });

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 100);
        this.camera.position.set(0, 0, 0);
        
        const light = new THREE.DirectionalLight( "#404040" ); // soft white light
        this.scene.add( light );
        const loader = new THREE.TextureLoader();
        let geometry = new THREE.SphereGeometry( 10, 32, 32 );
        
        this.material = new THREE.MeshBasicMaterial({
            map: loader.load('Assets/Panoramas/panorama1.png'),
            side: THREE.BackSide,
            needsUpdate: true
        });
        
        this.sphere = new THREE.Mesh( geometry, this.material );
        this.sphere.position.set(0, 0, 0);
        this.sphere.scale.x = -1;
        this.scene.add( this.sphere  );
        
        const animate = ()=>{
            requestAnimationFrame(animate);
            
            //this.camera.rotation.x = (AngleY * Math.PI)/(180);
            this.renderer.render(this.scene, this.camera);
        };
        
        animate();
    }
    render() {
        return (
            <div>
                <canvas id={this.props.ID} width={this.width} height={this.height}/>
            </div>
        );
    }
}

export default Panorama;