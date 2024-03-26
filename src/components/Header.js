import trollFace from "../images/troll_face.png";

export default function Header({ setBrowse }) {
    return (
        <header className="h-44 flex items-center justify-between py-8 px-12 bg-gradient-to-r from-algae to-grass shadow-2xl md:h-40 lg:h-28 lg:px-44">
            <div
                onClick={() => setBrowse(true)}
                className="cursor-pointer flex items-center h-full gap-6"
            >
                <img
                    className="aspect-square h-full"
                    src={trollFace}
                    alt="troll face"
                />
                <h1 className="justify-self-center lg:text-4xl text-white font-semibold text-5xl font-sans tracking-tightest">
                    Memeracle
                </h1>
            </div>
            <nav>
                <ul className="flex text-white gap-8 text-2xl">
                    <li
                        onClick={() => setBrowse(false)}
                        className="cursor-pointer border-transparent border-b-2 hover:border-white transition-colors"
                    >
                        Random Meme
                    </li>
                </ul>
            </nav>
        </header>
    );
}
