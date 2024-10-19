import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hit and Blow Game</title>
      </Head>
      <h1>Welcome to Hit and Blow Game</h1>
      <Link href="/game">
        <a>Start Game</a>
      </Link>
      <h2>Game Instructions:</h2>
      <ol>
        <li>The player selects 3 (or 4) distinct numbers from 0 to 9 and decides their order.</li>
        <li>The roles of the first and second player are determined.</li>
        <li>The first player makes a guess of the opponent's numbers and declares it.</li>
        <li>The opponent responds with the number of "hits" (correct number and correct position) and "blows" (correct number but incorrect position).</li>
        <li>Then, the second player makes a guess of the first player's numbers and declares it.</li>
        <li>Similarly, the first player responds with the number of "hits" and "blows."</li>
        <li>Repeat steps 3 to 6, and the first player to correctly guess all the numbers in the correct order wins the game.</li>
      </ol>
      <h2>Rules:</h2>
      <ul>
        <li>A "hit" occurs when both the number and position are correct.</li>
        <li>A "blow" occurs when the number is correct, but the position is incorrect.</li>
        <li>Duplicate numbers are not allowed when deciding one's own numbers.</li>
      </ul>
      <h2>ゲーム手順</h2>
      <ol>
        <li>プレイヤーは異なる数字で0~9のうちから3つ（または4つ）を選び、その順番も決定します。</li>
        <li>先攻・後攻を決めます。</li>
        <li>先攻が相手の数字を予想し、それを宣言します。</li>
        <li>相手はその予想に対して「hit」（数字と位置が合っている）および「blow」（数字は合っているが位置が異なる）の数を答えます。</li>
        <li>次に、後攻が相手の数字を予想して宣言します。</li>
        <li>これも同様に、先攻が「hit」と「blow」の数を答えます。</li>
        <li>3~6の手順を繰り返し、最初にすべての数字と順番が一致したプレイヤーが勝利します。</li>
      </ol>
      <h2>ルール</h2>
      <ul>
        <li>hitは数字および順番が正しい場合</li>
        <li>blowは数字は正しいが順番が誤っている場合</li>
        <li>自分の数字を決める際、重複する数字は使えない</li>
      </ul>
    </div>
  );
}
