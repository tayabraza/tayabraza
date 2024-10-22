
function Profile(){

    return (
        <div className="bg-black-transparent border border-sky-400 rounded-xl mt-32 mb-10 p-5">
            <div className="profile-picture block w-48 mx-auto border border-sky-400 rounded-full -mt-32">
                <img src="../src/img/tayabraza.png" alt="Tayab Raza" className="grayscale block w-48 rounded-full mx-auto hover:grayscale-0" />
            </div>
            <h1 className="text-4xl text-left mb-1 mt-3 md:-mt-16 gradient-tr">Tayab Raza</h1>
            <p className="text-lg text-left text-white">Front End Developer</p>
            <p className="text-left my-5 leading-8 text-white">The creator of Gap CSS framework (<a href="https://gapcss.com" target="_blank" rel="noopener noreferrer" className="gradient-tr">gapcss.com</a>) and a highly skilled Front End Developer with a proven track record of crafting user-friendly web experiences. Proficient in a wide range of technologies, including HTML, CSS, JavaScript, TypeScript, Vue.js, React.js, Node.js, PHP, Laravel, MySQL, and WordPress. Possesses a keen eye for web design aesthetics and a dedication to writing clean and efficient code.</p>
        </div>
    )

}

export default Profile;