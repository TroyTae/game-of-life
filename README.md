프론트엔드 개발자에게 중앙 정렬을 어떻게 하냐고 물어보면 inline 요소는 text-align 속성을 center로 지정하고, block 요소는 margin 속성을 auto로 지정한다고 대답할 겁니다.
그런데 좌우가 아니라 위아래 수직 정렬을 어떻게 하겠냐고 물어보면 대답을 선뜻 못하거나 굉장히 다양한 답변들이 나옵니다.
그 여러 방법들 중에 개발자들이 사용하면서도 "왜 되는거지?"라고 의구심을 많이 품게 되는 vertical-align에 대해서 자세히 써보려고 합니다.

벤더사들의 구현에 따라 달라질 수 있지만 [표준 명세서](https://www.w3.org/TR/CSS2/visudet.html#propdef-vertical-align)에서는 vertical-align에 대한 설명을 이렇게 시작합니다.

```
이 속성은 line box 안에서 inline-level 요소에 의해 생성되는 박스들의 수직 위치에 영향을 미칩니다.
```

inline-level 요소는 한 줄에 나열할 수 있는 요소들을 말합니다.
display 속성을 inline, inline-block, inline-table 등으로 지정해서 만들 수 있는데요.
이 요소들에 의해서 만들어진 가상의 박스들은 곧 해당 요소의 크기를 나타냅니다.

간단한 예를 들자면 아래처럼 css가 적용된 요소의 박스 크기는 100x100px입니다.
```
.box {
  display: inline-block;
  width: 100px;
  height: 100px;
}
```
inline은 inline-block와 다르게 width/height가 아니라 폰트 매트릭스에 따른 계산이 필요하므로 추후에 다루겠습니다.

아무튼 각 줄마다 이런 inline-level 박스들을 가지고 있는 박스를 inline-box라고 하는데요.
이 inline-box를 이해하면 vertical-align에 적용 가능한 값들 중 top/bottom을 완벽하게 이해할 수 있습니다.
왜냐하면 top은 line-box의 최상단에, bottom은 line-box의 최하단에 정렬시켜주기 때문인데요.
그렇다면 line-box는 어떻게 계산되는 걸까요?


```
1. The height of each inline-level box in the line box is calculated.
2. The inline-level boxes are aligned vertically according to their 'vertical-align' property. In case they are aligned 'top' or 'bottom', they must be aligned so as to minimize the line box height. If such boxes are tall enough, there are multiple solutions (i.e., the position of the strut, see below).
3. The line box height is the distance between the uppermost box top and the lowermost box bottom. (This includes the strut, as explained under 'line-height' below.)
```
