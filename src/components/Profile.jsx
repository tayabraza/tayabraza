import tayabraza from '/src/img/tayabraza.png';

function Profile(){

    return (
        <div className="bg-black-transparent border border-sky-400 rounded-xl mt-32 mb-10 p-5">
            <div className="profile-picture block w-48 mx-auto border border-sky-400 rounded-full -mt-32">
                <img src={tayabraza} alt="Tayab Raza" className="grayscale block w-48 rounded-full mx-auto hover:grayscale-0" />
            </div>
            <h1 className="text-4xl text-left mb-1 mt-3 md:-mt-16 gradient-tr">Tayab Raza</h1>
            <p className="text-lg text-left text-white">Front End Developer</p>
            <p className="text-left my-5 leading-8 text-white">Innovative Front-End Developer and creator of the GAP CSS framework (<a href="https://gapcss.com" target="_blank" rel="noopener noreferrer" className="gradient-tr">gapcss.com</a>) with over 9 years of experience in delivering high-performance, user-centric web applications. Proficient in modern technologies such as HTML, CSS, JavaScript, TypeScript, Vue.js, React.js, Next.js, Svelte.js, Three.js, Node.js, PHP, Laravel, and MySQL. A passionate Crypto Enthusiast and core community member of the Catwifhat meme coin ($CWIF), actively contributing through the development of engaging meme games (cwifsoldier.com). Strong expertise in building scalable systems, crafting responsive designs, and optimising web performance. A collaborative team player with a commitment to clean code, problem-solving, and contributing to the crypto space.</p>
        </div>
    )

}

export default Profile;