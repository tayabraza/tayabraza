import { useRef } from "react";


function Projects({results, loading}) {

    const showProjects = event => {
        document.querySelectorAll('button.text-white').forEach(btn => btn.classList.remove('gradient-tr'));
        event.target.classList.add('gradient-tr');
        document.querySelectorAll('.slider-container').forEach(slider => slider.style.display = 'none');
        document.getElementById(`slider-container-${event.target.id}`).style.display = 'block';
    }

    return (

        <div>

            <div className="flex justify-around gap-4 bg-black-transparent border rounded-b-none border-sky-400 rounded-xl p-3 pb-5">

                <button id="1" className="md:text-xl text-white mt-3 gradient-tr" onClick={showProjects}>Professional Projects</button>
                <button id="2" className="md:text-xl text-white mt-3" onClick={showProjects}>Freelance Projects</button>
                <button id="3" className="md:text-xl text-white mt-3" onClick={showProjects}>Personal Projects</button>

            </div>

            <div>

            {
                loading ? <i className="fa fa-spinner fa-spin mt-48" style={{fontSize: '72px'}}></i> : results.map((result, index) => {

                    return (

                        <div key={index + 1} id={`slider-container-${index + 1}`} className="slider-container bg-black-transparent border rounded-t-none border-sky-400 rounded-xl px-6 pb-10">

                            <div className="slider">

                                {
                                    result[Object.keys(result)].map((project, index) => {

                                        return (

                                            <div key={project.id} className={`card card-${index + 1} shadow-md`}>
                                                <a href={project.url}>
                                                    <div>
                                                        <img src={project.image} alt={project.name} className="rounded-t-xl grayscale hover:grayscale-0" />
                                                        <h2 className="text-lg mt-3 hover:text-sky-400">{project.name}</h2>
                                                        <p className="text-sm text-left p-3">{project.description}</p>
                                                    </div>
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

            </div>

        </div>

    )
}

export default Projects;