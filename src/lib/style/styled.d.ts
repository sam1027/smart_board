import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: {
      backgrounds : {
        background : string,
      },
      fonts : {
        title : string,
        subTitle : string,
        font1 : string,
      },
      border :{
        baseBorder : string,
        border1 : string,
      },
      point : {
        point1 : string,
        point2 : string,
      },
      pointColor :{
        red :string,
        green :string,
        blue :string,
        yellow :string,
        teal :string,
        gray :string,
        royalBlue : string,
        steelBlue : string,
      }
      success : string,
      error : string,
      secondary : string,
    };
    fontSizes?: {
      xsm: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    fontWeights?: {
      extraBold: number;
      bold: number;
      semiBold: number;
      regular: number;
    };
    spaces? : {
      spxs : string;
      sps : string;
      spm : string;
      spl : string;
      spxl : string;
    }
  }
}
