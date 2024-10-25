import { useState, useEffect } from "react";

function Projects({results, loading}) {

    const [drag, setDrag] = useState();

    useEffect( () => {

        navigator.maxTouchPoints > 0 ? setDrag(true) : setDrag(false);
        
    }, [drag]);

    const showProjects = event => {
        document.querySelectorAll('button.text-white').forEach(btn => btn.classList.remove('gradient-tr'));
        event.target.classList.add('gradient-tr');
        document.querySelectorAll('.slider-container').forEach(slider => slider.style.display = 'none');
        document.getElementById(`slider-container-${event.target.id}`).style.display = 'block';
    }

    let dragValue = 72;
  
    ['drag', 'touchmove'].forEach( dragEvent => {
        window.addEventListener(dragEvent, event => {
            if ( event.target.draggable ) {
                event.target.closest('.slider').classList.remove('slider-animation');
                event.target.closest('.slider').style.transform  = `rotateY(${dragValue++}deg)`;
            } 
        })
    });
    ['dragend', 'touchend'].forEach( dragEvent => {
        window.addEventListener(dragEvent, event => {
            if ( event.target.draggable ) {
                event.target.closest('.slider').style.transform  = `perspective(1000px) rotateY(${dragValue++}deg)`;
            }
        })
    });

    return (

        <>

            <div className="flex justify-around gap-4 bg-black-transparent border rounded-b-none border-sky-400 rounded-xl p-3 pb-5">

                <button id="1" className="md:text-xl text-white mt-3 gradient-tr" onClick={showProjects}>Professional Projects</button>
                <button id="2" className="md:text-xl text-white mt-3" onClick={showProjects}>Freelance Projects</button>
                <button id="3" className="md:text-xl text-white mt-3" onClick={showProjects}>Personal Projects</button>

            </div>

            {
                loading ? <i className="fa fa-spinner fa-spin mt-48" style={{fontSize: '72px'}}></i> : results.map((result, index) => {

                    return (

                        <div key={index + 1} id={`slider-container-${index + 1}`} className="slider-container bg-black-transparent border rounded-t-none border-sky-400 rounded-xl px-6 pb-10">

                            <div className="slider slider-animation" draggable>

                                    {
                                        result[Object.keys(result)].map((project, index) => {

                                            return (

                                                <div key={project.id} className={`card card-${index + 1} shadow-md`}>
                                                    <a href={project.url} className="card-link" target="_blank" rel="noopener noreferrer">
                                                        <img src={project.image} alt={project.name} className="rounded-t-xl grayscale hover:grayscale-0"  />
                                                        <h2 className="text-lg mt-3 hover:text-sky-400" draggable={drag}>{project.name}</h2>
                                                        <p className="text-sm text-left p-3" draggable={drag}>{project.description}</p>
                                                    </a>
                                                </div>

                                            )

                                        })
                                    }

                            </div>

                        </div>

                    )

                })
            }

        </>

    )
}

export default Projects;