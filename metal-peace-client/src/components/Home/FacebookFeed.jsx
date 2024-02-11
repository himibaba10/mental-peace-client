import Heading from "../Shared/Heading";
import "../../styles/FacebookFeed.css";

const FacebookFeed = () => {
  const fbPostIds = [
    "https://web.facebook.com/photo/?fbid=1822083024917563&set=a.185699541889261",
    "https://web.facebook.com/ferdoushimel10/posts/pfbid0598NpANXgjC2wjQo2hvTrvUGntQ6SCK2W8bMWwWJvugb3Q368HjBp8k99G6y3PXpl",
    "https://web.facebook.com/ferdoushimel10/posts/pfbid0aNPx6B84mJvxjVDQqP38Bxf7MEVN6jxiM32tefAfSK9cyMi4DosKxmHQJpzheEzal",
  ];
  return (
    <section className="section my-20">
      <Heading title="My Facebook Posts" subTitle="Social Posts" />
      <div className="grid grid-cols-3 gap-10">
        {fbPostIds.map((postId) => (
          <div
            key={postId}
            className="fb-post w-full min-w-0 h-full"
            data-href={postId}
            data-show-text="true"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default FacebookFeed;
