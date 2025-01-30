import LinkOrBtn from "../ui/button";

function BlogUrl({domainURL, githubURL,customClass}) {
  return (
    <p className={`projects-list-item-links flex justify-between gap-6 items-center ${customClass}`}>
      <LinkOrBtn variant="anchor" link={domainURL} linkText="VIEW PROJECT" />
      <LinkOrBtn variant="anchor" link={githubURL} linkText="VIEW Code" />
    </p>
  );
}

export default BlogUrl;
