import Insights from "../Shared/Insights";
import Paragraph from "@/src/utils/Paragraph";
import SecondaryButton from "@/src/utils/SecondaryButton";
import Heading from "../Shared/Heading";

const SessionInsights = () => {
  return (
    <Insights>
      <Heading
        align="left"
        title="Letting go and gaining insights"
        subTitle="Mental Peace sessions are transformative"
      />
      <Paragraph>
        We all carry a burden that arose in the past. This affects our daily
        lives. This burden is stored in our body in the form of energy. In the
        sessions we encounter this energy that has hindered your development so
        far. When you become aware of this, it is the right time to gain insight
        into when and how this energy originated.
        <br />
        <br />
        We take away the energy. You are then one step closer to yourself. We
        walk the road together, you determine the pace yourself. That wisdom is
        within you, you are so much wiser than you think!
      </Paragraph>
      <SecondaryButton>Blog: An insight into the sessions</SecondaryButton>
    </Insights>
  );
};

export default SessionInsights;
