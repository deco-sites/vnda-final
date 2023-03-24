import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

import Newsletter from "./Newsletter.tsx";
import type { ComponentChildren } from "preact";
import Console from "../ui/Console.tsx";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <Text variant="caption" tone="default-inverse">
      {isIcon(item)
        ? (
          <div class="border-default border-1 py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          <a href={item.href}>
            {item.label}
          </a>
        )}
    </Text>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  description: string;
  address: string;
  email: string;
  footerItems: Array<{
    title: string;
    items: Array<{
      text: string;
      url: string;
    }>;
  }>;
}

function Footer({ description, address, email, footerItems }: Props) {
  const image = null;

  const socialIcons: AvailableIcons[] = [
    "Instagram2",
    "Facebook2",
    "WhatsApp",
    "Twitter2",
    "Vsco2",
  ];

  return (
    <footer class="relative w-full bg-primary-red flex flex-col divide-y-1 divide-default">
      <div className="absolute -top-10 right-4">
        {image
          ? <div></div>
          : (
            <div class="bg-[#C3C3C3] flex justify-center items-center w-[140px] h-[140px] text-black">
              <span class="text-4xl">140 x 140</span>
            </div>
          )}
      </div>
      <div>
        <Container class="w-full flex flex-col divide-y-1 divide-default">
          <FooterContainer>
            <Newsletter />

            <ul class="flex gap-6 mobile:mb-4">
              {socialIcons.map((icon) => {
                return (
                  <li class="w-16 h-16 bg-white rounded-full flex justify-center items-center">
                    <button class="text-primary-red">
                      <Icon id={icon} height={24} width={24} strokeWidth={1} />
                    </button>
                  </li>
                );
              })}
            </ul>

            <div class="outline-white">
              <p>{description}</p>
              <p>{address}</p>
              <p>{email}</p>
            </div>

            <Console content={footerItems} />
            <p>{JSON.stringify(footerItems, null, 2)}</p>

            {
              /* <div class="outline-black">
              {footerItems.map((item) => {
                return (
                  <div class="outline-interactive">
                    <h4>
                      <button>{item.title}</button>
                    </h4>
                    {item.items.map((subItem) => {
                      return (
                        <ul>
                          <li>
                            <a href={subItem.url}>{subItem.text}</a>
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                );
              })}
            </div> */
            }
          </FooterContainer>
        </Container>
      </div>

      <div>
        <Container class="w-full">
          <FooterContainer class="flex items-center justify-center w-full">
            <Text
              class="text-[1.2rem]"
              variant="body"
              tone="default-inverse"
            >
              Vnda - Tecnologia em E-commerce
            </Text>
          </FooterContainer>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
