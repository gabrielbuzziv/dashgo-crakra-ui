import Icon from "@chakra-ui/icon";
import { Link as CrakraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/layout";
import { ElementType } from "react";
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <CrakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text marginLeft="4" fontWeight="medium">{children}</Text>
      </CrakraLink>
    </ActiveLink>
  )

}