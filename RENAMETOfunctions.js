// .chapterクラスを持つ要素をすべて取得
const chapters = document.querySelectorAll('.chapter');
const answers = document.querySelectorAll('.answer');

// 各要素にフェードインとフェードアウトのアニメーションを適用
chapters.forEach((chapter) => {
  gsap.fromTo(
    chapter,
    { autoAlpha: 0, y: 50 }, // 初期状態
    {
      duration: 1, // アニメーションの時間
      autoAlpha: 1, // 完全に表示
      y: 0, // 元の位置
      ease: 'power2.out',
      scrollTrigger: {
        trigger: chapter,
        start: 'top 80%', // トリガー位置
        end: 'top 30%', // アニメーションの終了位置
        toggleActions: 'play reverse play reverse', // トリガー時の挙動
      },
    }
  );

  // フェードアウトのアニメーションを追加
  gsap.to(chapter, {
    autoAlpha: 0, // 完全に透明
    y: -50, // Y軸方向に50px上に移動
    duration: 1, // アニメーションの時間
    ease: 'power2.out', // イージング
    scrollTrigger: {
      trigger: chapter,
      start: 'top 30%', // トリガー位置
      end: 'top 0%', // アニメーションの終了位置
      toggleActions: 'play reverse play reverse', // トリガー時の挙動
    },
  });
});

// .answer要素にも同様の処理を追加
answers.forEach((answer) => {
  gsap.fromTo(
    answer,
    { autoAlpha: 0, y: 50 }, // 初期状態
    {
      duration: 1, // アニメーションの時間
      autoAlpha: 1, // 完全に表示
      y: 0, // 元の位置
      ease: 'power2.out',
      scrollTrigger: {
        trigger: answer,
        start: 'top 80%', // トリガー位置
        end: 'top 30%', // アニメーションの終了位置
        toggleActions: 'play reverse play reverse', // トリガー時の挙動
      },
    }
  );

  // フェードアウトのアニメーションを追加
  gsap.to(answer, {
    autoAlpha: 0, // 完全に透明
    y: -50, // Y軸方向に50px上に移動
    duration: 1, // アニメーションの時間
    ease: 'power2.out', // イージング
    scrollTrigger: {
      trigger: answer,
      start: 'top 30%', // トリガー位置
      end: 'top 0%', // アニメーションの終了位置
      toggleActions: 'play reverse play reverse', // トリガー時の挙動
    },
  });
});