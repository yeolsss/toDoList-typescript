// import original module declarations
import 'styled-components';

// and extend them!
export module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    cardColor: string;
    textColor: string;
    borderColor: string;
    doneColor: string;
    modalBgColor: string;
  }
}
