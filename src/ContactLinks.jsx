import List from "./layout/List";

export default function ContactLinks() {
  const lists = [
    {
      id: "1",
      className: `icon-github`,
      value: `https://www.bing.com/?FORM=Z9FD1`,
    },
    {
      id: "2",
      className: `icon-android`,
      value: `www.google.com`,
    },
    {
      id: "3",
      className: `icon-linkedin-square`,
      value: `www.google.com`,
    },
    {
      id: "4",
      className: `icon-twitter1`,
      value: `www.google.com`,
    },
  ];
  return (
    <ul className="profile-info">
      {lists.map((item) => {
        return (
          <List key={item.id} className={item.className} value={item.value} />
        );
      })}
    </ul>
  );
}
