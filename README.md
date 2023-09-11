새 프로젝트 연습

목표 : 직관적(intuitive)인 코드 스타일로 작성하자

## 고려해야할 사항

1. props 작명방법

- value에는 그냥 이름을 붙인다 최대한 길지 않는 단어
- callback에는 'on'을 붙인다

2. react Query 를 쓰냐 안쓰냐

- react query 를 안쓴다면

  - 서버에서는 crud의 create, update, delete는 결과값으로 통 배열을 내놓고
    프론트에서는 받은 통배열을 바로 list로 집어 넣는다

  - 장점 : 프론트 코드가 굉장히 간편해짐

  - 단점 : 백엔드가 로직처리 다해야됨 근데 이게 원래 맞는 것일 수도

- react query를 쓴다면

  - list는 useQuery로, create, update, delete는 mutation을 쓰고,
    invalidateQuery를 써야한다

3. 컴포넌트 종류

   - 상단 컴포넌트와 하단 컴포넌트로 나뉜다
   - 상단 컴포넌트
     - list를 뿌려줘야하는 컴포넌트
   - 하단 컴포넌트

     - useMemo를 쓰기에 적합한 환경이다

   - page컴포넌트에는 마지막에 'Page'라고 붙여준다

4. 아예 service 폴더구성을 postman과 아예 똑같이 맞출 수 있을 것같다.

5. 상단 컴포넌트의 구성
   제일 위에 state, ref같은 변수들을 위치,
   그 다음에 hook
   그 다음에 useEffect
   그 다음에 handle~~~

생각해보기

- 한 상단 컴포넌트에 여러가지 기능이 너무 많이 탑재된 경우

  - 컴포넌트 하나에 기능이 몇 개씩 탑재될수있는데
    어떻게 하면 유지보수하기 쉽고 잘 읽히게 구분 할 수 있을까?

  통신(crud), Ui적인 기능 부분,

dwitter MVC 패턴 연습

## 만드는 과정

1. theme적용

- ThemeProvider from styled component
- context

2. font 적용

-
