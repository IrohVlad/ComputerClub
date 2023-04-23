import React from 'react';
import tel from '../assets/telegram.svg'

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="stats _container">
                <div className="stats-item">
                    <div className="stats-item-img">
                        <img src={tel} alt="" />
                    </div>
                    <div className="stats-item-text">
                    Процессор Intel Core i9-10900F CM8070104282625 OEM
                    </div>
                </div>
                <div className="stats-item">
                    <div className="stats-item-img">
                        <img src={tel} alt="" />
                    </div>
                    <div className="stats-item-text">
                    Видеокарта PCI-E ASUS GeForce RTX 3090 TURBO
                    </div>
                </div>
                <div className="stats-item">
                    <div className="stats-item-img">
                        <img src={tel} alt="" />
                    </div>
                    <div className="stats-item-text">
                    Оперативная память 16 гб
                    </div>
                </div>
                <div className="stats-item">
                    <div className="stats-item-img">
                        <img src={tel} alt="" />
                    </div>
                    <div className="stats-item-text">
                    Монитор DELL S2722DGM 27
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Stats;