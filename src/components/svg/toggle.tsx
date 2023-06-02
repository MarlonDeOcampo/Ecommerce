import { IconProps } from "../../models/otherIcons";

const Toggle: React.FC<IconProps> = ({ width, height, color }) => {
    return (
        <svg fill={color ?? "#17392d"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={width ?? "20px"} height={height ?? "20px"}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeWidth="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.72 21.78a.75.75 0 001.06-1.06L5.56 17.5h14.69a.75.75 0 000-1.5H5.56l3.22-3.22a.75.75 0 10-1.06-1.06l-4.5 4.5a.75.75 0 000 1.06l4.5 4.5zm8.56-9.5a.75.75 0 11-1.06-1.06L18.44 8H3.75a.75.75 0 010-1.5h14.69l-3.22-3.22a.75.75 0 011.06-1.06l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5z"></path></g></svg>
    );
};

export default Toggle;