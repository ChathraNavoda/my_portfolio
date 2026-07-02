import { site } from "@/content/site";
import { TextLink } from "@/components/ui/text-link";

const links = [
  {
    label: "Resume",
    href: site.resume,
  },
  {
    label: "GitHub",
    href: site.github,
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
  },
];

export function HeroActions() {
  return (
    <div className="mt-12 flex flex-wrap gap-8">
      {links.map((link) => (
        <TextLink
          key={link.label}
          href={link.href}
        >
          {link.label}
        </TextLink>
      ))}
    </div>
  );
}