import Title from '../common/title';
import Skill from '../skills/skill';

import skills from '../../constants/skills';

export default function Skills() {
  return (
    <>
      <Title title="Skills" />
      <div className="flex flex-wrap">
        {skills.map((skill) => {
          return <Skill key={skill.name} skill={skill} />;
        })}
      </div>
    </>
  );
}
