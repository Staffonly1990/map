import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import { Menu } from 'antd'
import clsx from 'clsx';
import style from './app.module.css';
import './app.css';
import 'leaflet/dist/leaflet.css'
import 'antd/dist/antd.css';
import 'leaflet-routing-machine';

const App: FC = () => {

    const menuRef = useRef<HTMLDivElement>(null);

    const markerIcon = new L.Icon({
        iconUrl: require('../../assets/icons/marker.png'),
        iconSize: [35, 35],
    });

    const resizMenu = (e: MouseEvent) => {
        menuRef.current!.style.minWidth = `${e.pageX}px`
        menuRef.current!.style.width = `${e.pageX}px`
    };

    const handleEvent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        if (e.type === "mousedown") {
            window.addEventListener('mousemove', resizMenu);
        }
        else {
            window.removeEventListener('mousemove', resizMenu);
        }
    }

    L.Routing

    return (
        <div className='flex' >

            <div ref={menuRef} className={clsx('border-black border-r-2', style.menu)}>

                <Menu>
                    <Menu.Item>item 1</Menu.Item>
                    <Menu.Item>item 1</Menu.Item>
                    <Menu.Item>item 1</Menu.Item>
                </Menu>

                <div onMouseDown={handleEvent} onMouseUp={handleEvent} className={style.resizer} />
            </div>

            <MapContainer
                center={[57.2404533699214, 60.07706157401414]}
                zoom={10}
                style={{ width: '100vw', height: '100vh' }}>
                <TileLayer url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=XHfn2b79I8SlOEelJu74'
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                ></TileLayer>

                <Marker icon={markerIcon} position={[57.2404533699214, 60.07706157401414]}>
                    <Popup>1231231</Popup>
                </Marker>
                <Marker key={1} icon={markerIcon} position={[57.2404533699214, 60.07706157401414]}>
                    <Popup>1231231</Popup>
                </Marker>


            </MapContainer>

        </div>
    );
};

export default App;