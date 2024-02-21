import React from "react";
import Image from "next/image";

interface WorkExperience {
  company: string;
  image: string;
  position: string;
  duration: string;
  description: string;
}

interface OrganizationExperience {
  organization: string;
  image: string;
  position: string;
  duration: string;
  description: string;
}

const workExperiences: WorkExperience[] = [
  {
    company: "ABC Company",
    image: "/work_experiences/dot.jpg",
    position: "Software Engineer",
    duration: "June 2020 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna non felis scelerisque aliquam.",
  },
  {
    company: "XYZ Corporation",
    image: "/work_experiences/dot.jpg",
    position: "Frontend Developer",
    duration: "January 2018 - May 2020",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];

const organizationExperiences: OrganizationExperience[] = [
  {
    organization: "ABC Organization",
    image: "/work_experiences/dot.jpg",
    position: "Vice President",
    duration: "June 2020 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna non felis scelerisque aliquam.",
  },
  {
    organization: "XYZ Organization",
    image: "/work_experiences/dot.jpg",
    position: "Secretary",
    duration: "January 2018 - May 2020",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="mt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-white text-3xl font-extrabold text-center mb-8">
        Work Experiences
      </h2>
      <div className="grid gap-8">
        {workExperiences.map((experience, index) => (
          <WorkExperienceCard key={index} experience={experience} />
        ))}
      </div>

      <h2 className="text-white text-3xl font-extrabold text-center mb-8 mt-12">
        Organization Experiences
      </h2>
      <div className="grid gap-8">
        {organizationExperiences.map((experience, index) => (
          <OrganizationExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
};

const WorkExperienceCard = ({ experience }: { experience: WorkExperience }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 bg-gray-900 rounded-lg shadow-md p-6">
      <div className="flex justify-center items-center">
        <Image
          src={experience.image}
          alt={experience.company}
          width={300}
          height={300}
          className="rounded-lg w-[125px] h-[125px]"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          {experience.company}
        </h3>
        <p className="text-gray-400 text-lg mb-2">{experience.position}</p>
        <p className="text-gray-400 mb-2">{experience.duration}</p>
        <p className="text-gray-400">{experience.description}</p>
      </div>
    </div>
  );
};

const OrganizationExperienceCard = ({
  experience,
}: {
  experience: OrganizationExperience;
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 bg-gray-900 rounded-lg shadow-md p-6">
      <div className="flex justify-center items-center">
        <Image
          src={experience.image}
          alt={experience.organization}
          width={300}
          height={300}
          className="rounded-lg w-[125px] h-[125px]"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          {experience.organization}
        </h3>
        <p className="text-gray-400 text-lg mb-2">{experience.position}</p>
        <p className="text-gray-400 mb-2">{experience.duration}</p>
        <p className="text-gray-400">{experience.description}</p>
      </div>
    </div>
  );
};

export default ExperienceSection;
