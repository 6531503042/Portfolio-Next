import Link from "next/link";
import LocalConfig from "@/constants/config";

const ResumeButton = () => {
  const resumeLink = LocalConfig.values.NEXT_PUBLIC_RESUME_LINK;

  return (
    <Link href={resumeLink} passHref>
      <a className="app__outlined_btn min-w-[12rem]" target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
    </Link>
  );
};

export default ResumeButton;
