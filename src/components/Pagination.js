import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Pagination({ pages, currPage, onPaginationChanged }) {
    return (
        <div className="m-7 gap-10 flex justify-center items-center">
            <FontAwesomeIcon
                className="focus:text-black hover:text-gray-500"
                onClick={() => onPaginationChanged(currPage - 1)}
                icon={faArrowLeft}
                color="black"
                size="2x"
            />
            <div className="flex gap-5">
                {/* Render every page */}
                {[...Array(pages).keys()].map((_, i) => {
                    return (
                        <button
                            className={`${
                                currPage - 1 === i
                                    ? "text-grass"
                                    : "text-black"
                            } text-4xl hover:text-gray-500 click:text-black`}
                            key={i + 1}
                            onClick={() => onPaginationChanged(i + 1)}
                        >
                            {i + 1}
                        </button>
                    );
                })}
            </div>
            <FontAwesomeIcon
                className="focus:text-black hover:text-gray-500"
                onClick={() => onPaginationChanged(currPage + 1)}
                icon={faArrowRight}
                color="black"
                size="2x"
            />
        </div>
    );
}
