import { NavigationControlProvider, useNavigationControl } from './navigation-control-context';
import { Sidebar } from './sidebar';
import { Header } from './header';

export { useNavigationControl };
export const Navigation = {
  Sidebar,
  Header,
  ControlProvider: NavigationControlProvider,
};
