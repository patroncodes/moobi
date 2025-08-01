import {projects} from "@/constants";
import {useMedia} from "@/context/MediaContext";
import Image from "next/image";
import {ReactNode, useState} from "react";
import {AiOutlineArrowRight} from "react-icons/ai";
import {cn, getTechIcon} from "@/lib/utils";
import {type Project} from "@/types";
import Link from "next/link";
import {RxExternalLink} from "react-icons/rx";

type ModalType = "description" | "features" | "learnings" | "challenges" | "stack" | ""

const ProjectDetails = () => {
    const {projectId} = useMedia()
    const [modalToOpen, setModalToOpen] = useState<ModalType>("");

    const project: Project | undefined = projects.find(project => project.id === projectId)

    if (!project || !projectId) {
        return (
            <p className="text-white mt-10">Not found</p>
        )
    }

    return (
        <div className="relative w-full h-full py-12 px-3 overflow-y-scroll no-visible-scrollbar">
            <Image src={project.thumbnail} alt={project.title} width={400} height={200}
                   className="w-full h-auto object-center rounded-b-lg"/>

            <ul className="flex flex-col gap-5 mt-7">
                <li className="text-white flex items-center justify-between w-full">
                    <p className="text-white text-base">Name</p>
                    <h1 className="text-white text-base font-serif">{project.title}</h1>
                </li>
                <li className="text-white flex items-center justify-between w-full"
                    onClick={() => setModalToOpen("description")}>
                    <p className="text-white text-base">Description</p>
                    <AiOutlineArrowRight/>
                </li>
                <li className="text-white flex items-center justify-between w-full"
                    onClick={() => setModalToOpen("stack")}>
                    <p className="text-white text-base">Technologies Used</p>
                    <AiOutlineArrowRight/>
                </li>
                <li className="text-white flex items-center justify-between w-full"
                    onClick={() => setModalToOpen("features")}>
                    <p className="text-white text-base">Features</p>
                    <AiOutlineArrowRight/>
                </li>
                <li className="text-white flex items-center justify-between w-full"
                    onClick={() => setModalToOpen("challenges")}>
                    <p className="text-white text-base">Challenges</p>
                    <AiOutlineArrowRight/>
                </li>
                <li className="text-white flex items-center justify-between w-full"
                    onClick={() => setModalToOpen("learnings")}>
                    <p className="text-white text-base">Progress Made</p>
                    <AiOutlineArrowRight/>
                </li>
                <li className="text-white">
                    <Link href={project.liveUrl} className="flex items-center justify-between w-full">
                        <p className="text-white text-base">Live Demo</p>
                        <RxExternalLink/>
                    </Link>
                </li>
                <li className="text-white">
                    <Link href={project.githubUrl} className="flex items-center justify-between w-full">
                        <p className="text-white text-base">Source Code</p>
                        <RxExternalLink/>
                    </Link>
                </li>
            </ul>

            {modalToOpen !== "" && (
                <>
                    <div className="absolute inset-0 w-full h-full bg-black/70 blur-md"
                         onClick={() => setModalToOpen("")}/>
                    <Modal>
                        {modalToOpen === 'description' && (
                            <p className="text-base text-gray-400 mt-2">{project.description}</p>
                        )}

                        {modalToOpen === 'stack' && (
                            <div className="flex flex-col gap-4">
                                {project.technologies.map((tech) => (
                                    <div
                                        key={tech}
                                        className="flex items-center gap-4"
                                        title={tech}
                                    >
                                        <Image
                                            src={getTechIcon(tech)}
                                            alt={tech}
                                            width={50}
                                            height={50}
                                            loading="lazy"
                                            className={cn("w-7 h-7 p-1 object-center object-cover", tech === 'Prisma' && "invert")}
                                        />
                                        <div className="text-white text-sm">{tech}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {(modalToOpen === 'learnings' || modalToOpen === 'challenges' || modalToOpen === 'features') && (
                            <ul className="flex flex-col gap-4 list-disc list-outside my-3">
                                {project[modalToOpen].map((content, index) => (
                                    <li key={index} className="text-gray-300 text-lg lg:text-base font-light">
                                        {content}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Modal>
                </>
            )}
        </div>
    )
}
export default ProjectDetails

export const Modal = ({children}: { children: ReactNode }) => {
    return (
        <div className="absolute top-1/2 -translate-y-1/2 flex w-[90%] h-fit border px-6 py-8 rounded-xl bg-black">
            {children}
        </div>
    )
}