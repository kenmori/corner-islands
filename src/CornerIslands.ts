export class CornerIslands {
  /***
 * 要素同士のつながり表現を島に例えて返します
 * 1: ーつの島
 * 2: 島のスタート
 * 3: 島の中間
 * 4: 島の終わり
 *
 * @example [2, 4, 2, 4] => 2つの島を持っている
 * @example [2, 3, 3, 4] => 要素4つで1つの島を構成している
 * @example [2, 3, 4, 1] => 2つの島を持っている
 * @param fields
 * @returns (1 | 2 | 3 | 4)[]
 */
  getIsland = (
    fields: { condition: 'And' | 'Or' }[]
  ): (1 | 2 | 3 | 4)[] => {
    let dp = Array.from({ length: fields.length }).fill(1) as (1 | 2 | 3 | 4)[];
    if (fields.length === 1) return [1];
    if (fields.length === 2) {
      if (fields[0].condition === 'And' && fields[1].condition === 'And') {
        return [2, 4];
      }
      return [1, 1];
    }
    dp[0] = 2;
    dp[1] = 3;
    for (let left = 0, mid = 1, right = 2; right < fields.length; left++, mid++) {
      if (
        fields[left].condition === 'And' &&
        fields[mid].condition === 'And' &&
        fields[right].condition === 'And'
      ) {
        dp[mid] = 3;
        dp[right] = 3;
        if (right === fields.length - 1) dp[right] = 4;
      } else if (
        fields[left].condition === 'And' &&
        fields[mid].condition === 'Or' &&
        fields[right].condition === 'And'
      ) {
        dp[right] = 2;
        dp[mid] = 4;
        if (left === 0) dp[left] = 2;
        if (right === fields.length - 1) dp[right] = 1;
      } else if (
        fields[left].condition === 'Or' &&
        fields[mid].condition === 'And' &&
        fields[right].condition === 'And'
      ) {
        dp[right] = 3;
        dp[mid] = 2;
        if (right === fields.length - 1) dp[right] = 4;
        if (left === 0) dp[left] = 1;
      } else if (
        fields[left].condition === 'Or' &&
        fields[mid].condition === 'Or' &&
        fields[right].condition === 'Or'
      ) {
        dp[right] = 1;
        dp[mid] = 1;
        if (left === 0) dp[left] = 1;
      } else if (
        fields[left].condition === 'Or' &&
        fields[mid].condition === 'And' &&
        fields[right].condition === 'Or'
      ) {
        dp[right] = 4;
        dp[mid] = 2;
        if (left === 0) dp[left] = 1;
      } else if (
        fields[left].condition === 'Or' &&
        fields[mid].condition === 'Or' &&
        fields[right].condition === 'And'
      ) {
        dp[right] = 2;
        dp[mid] = 1;
        if (left === 0) dp[left] = 1;
        if (right === fields.length - 1) dp[right] = 1;
      } else if (
        fields[left].condition === 'And' &&
        fields[mid].condition === 'Or' &&
        fields[right].condition === 'Or'
      ) {
        dp[right] = 1;
        dp[mid] = 4;
        if (left === 0) dp[left] = 2;
      }
      right++;
    }
    return dp;
  };
}
