import React, { useState } from 'react';
import { useEffect } from 'react';
import './Features.css';
import AllFeatures from '../../Data/features.json'
import SingleFeature from '../SingleFeature/SingleFeature';

function Features(props) {
    const [features , setFeatures] = useState([]);
    useEffect(() => {
        setFeatures(AllFeatures);
    }, []);

    return (
        <section className="features my-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-6">
                            <h2>Why do you choose us</h2>
                            <p className="mt-3 mb-5">Unexpected flavors forged from nature and mingled with flourish. Vibrant herbs grown as close to home as it gets (they’re from the rooftop garden). The freshest ingredients responsibly sourced both near and far.</p>
                            </div>
                        </div>
                    </div>

                    {
                        features.map( feature => <SingleFeature key={feature.id} feature={feature}></SingleFeature>)
                    }
                    
                </div>
            </div>
        </section>
    );
}

export default Features;