import React from 'react';

/**
 * Intro section component. This component displays a brief
 * introduction about the portfolio owner. In a real application
 * you would replace the placeholder text with your own biography
 * and perhaps an avatar image.
 */
function Intro() {
  return (
    <section id="intro">
      <h1>안녕하세요!</h1>
      <p>
        저는 빌드된 포트폴리오의 예제 구조를 보여주기 위해 작성된 간단한
        React 애플리케이션의 구성 요소입니다. 실제 프로젝트에서 이
        섹션은 자기소개, 흥미 있는 분야나 기술 스택을 소개하는 내용으로
        채워질 수 있습니다.
      </p>
    </section>
  );
}

export default Intro;