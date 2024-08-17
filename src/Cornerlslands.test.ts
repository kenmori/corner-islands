import { CornerIslands } from './CornerIslands';

describe('getIsland', () => {
  let instance: CornerIslands
  beforeAll(()=> {
    instance = new CornerIslands();
  })
  describe("when the fields is ['And']", () => {
    it('should return [1]', () => {
      const fields = [{ condition: 'And' as const }];

      const values = instance.getIsland(fields);

      const result = [1];
      expect(values).toEqual(result);
    });
  });

  describe("when the fields is ['And', 'And']", () => {

    it('should return [2, 4]', () => {
      const fields = [
        { condition: 'And' as const },
        { condition: 'And' as const },
      ];
      const values = instance.getIsland(fields);

      const result = [2, 4];

      expect(values).toEqual(result);
    });
  });

  describe("when the fields is ['And', 'And', 'And']", () => {

    it('should return [2, 3, 4]', () => {
      const fields = [
        { condition: 'And' as const },
        { condition: 'And' as const },
        { condition: 'And' as const },
      ];

      const values = instance.getIsland(fields);

      const result = [2, 3, 4];

      expect(values).toEqual(result);
    });
  });

  describe("when the fields is ['And', 'Or', 'And']", () => {


    it('should return [2, 4, 1]', () => {
      const fields = [
        { condition: 'And' as const },
        { condition: 'Or' as const },
        { condition: 'And' as const },
      ];

      const values = instance.getIsland(fields);

      const result = [2, 4, 1];

      expect(values).toEqual(result);
    });
  });

  describe("when the fields is ['And', 'Or', 'And', 'And']", () => {

    it('should return [2, 4, 2, 4]', () => {
      const fields = [
        { condition: 'And' as const },
        { condition: 'Or' as const },
        { condition: 'And' as const },
        { condition: 'And' as const },
      ];

      const values = instance.getIsland(fields);

      const result = [2, 4, 2, 4];

      expect(values).toEqual(result);
    });
  });

  describe("when the fields is ['And', 'And', 'Or', 'And']", () => {

    it('should return [2, 3, 4, 1]', () => {
      const fields = [
        { condition: 'And' as const },
        { condition: 'And' as const },
        { condition: 'Or' as const },
        { condition: 'And' as const },
      ];

      const values = instance.getIsland(fields);

      const result = [2, 3, 4, 1];

      expect(values).toEqual(result);
    });
  });

  describe("when the fields is ['And', 'Or', 'And', 'Or', 'Or']", () => {

    it('should return [2, 4, 2, 4, 1]', () => {
      const fields = [
        { condition: 'And' as const },
        { condition: 'Or' as const },
        { condition: 'And' as const },
        { condition: 'Or' as const },
        { condition: 'Or' as const },
      ];

      const values = instance.getIsland(fields);

      const result = [2, 4, 2, 4, 1];

      expect(values).toEqual(result);
    });
  });

  describe("when the fields is ['And', 'And', 'Or', 'Or']", () => {

    it('should return [2, 3, 4, 1]', () => {
      const fields = [
        { condition: 'And' as const },
        { condition: 'And' as const },
        { condition: 'Or' as const },
        { condition: 'Or' as const },
      ];

      const values = instance.getIsland(fields);

      const result = [2, 3, 4, 1];

      expect(values).toEqual(result);
    });
  });

  describe("when the fields is ['And', 'Or', 'And', 'Or']", () => {

    it('should return [2, 4, 2, 4]', () => {
      const fields = [
        { condition: 'And' as const },
        { condition: 'Or' as const },
        { condition: 'And' as const },
        { condition: 'Or' as const },
      ];

      const values = instance.getIsland(fields);

      const result = [2, 4, 2, 4];

      expect(values).toEqual(result);
    });
  });

  describe("when the fields is ['And', 'Or', 'And', 'And', 'And', 'Or', 'And', 'And', 'And', 'Or', 'And']", () => {

    it('should return [2, 4, 2, 3, 3, 4, 2, 3, 3, 4, 1]', () => {
      const fields = [
        { condition: 'And' as const },
        { condition: 'Or' as const },
        { condition: 'And' as const },
        { condition: 'And' as const },
        { condition: 'And' as const },
        { condition: 'Or' as const },
        { condition: 'And' as const },
        { condition: 'And' as const },
        { condition: 'And' as const },
        { condition: 'Or' as const },
        { condition: 'And' as const },
      ];

      const values = instance.getIsland(fields);

      const result = [2, 4, 2, 3, 3, 4, 2, 3, 3, 4, 1];

      expect(values).toEqual(result);
    });
  });

  describe("when the fields is ['And', 'Or', 'And', 'Or', 'And']", () => {

    it('should return [2, 4, 2, 4, 1]', () => {
      const fields = [
        { condition: 'And' as const },
        { condition: 'Or' as const },
        { condition: 'And' as const },
        { condition: 'Or' as const },
        { condition: 'And' as const },
      ];

      const values = instance.getIsland(fields);

      const result = [2, 4, 2, 4, 1];

      expect(values).toEqual(result);
    });
  });

  describe("when the fields is ['Or', 'And', 'And', 'Or']", () => {

    it('should return [1, 2, 3, 1]', () => { // 1, 2, 3, 4確認
      const fields = [
        { condition: 'Or' as const },
        { condition: 'And' as const },
        { condition: 'And' as const },
        { condition: 'Or' as const },
      ];

      const values = instance.getIsland(fields);

      const result = [1, 2, 3, 1];

      expect(values).toEqual(result);
    });
  });

  describe("when the fields is ['And', 'Or', 'And', 'Or']", () => {

    it('should return [2, 4, 2, 4]', () => {
      const fields = [
        { condition: 'And' as const },
        { condition: 'Or' as const },
        { condition: 'And' as const },
        { condition: 'Or' as const },
      ];

      const values = instance.getIsland(fields);

      const result = [2, 4, 2, 4];

      expect(values).toEqual(result);
    });
  });

  describe("when the fields is ['Or', 'Or', 'Or', 'Or']", () => {

    it('should return [1, 1, 1, 1]', () => {
      const fields = [
        { condition: 'Or' as const },
        { condition: 'Or' as const },
        { condition: 'Or' as const },
        { condition: 'Or' as const },
      ];

      const values = instance.getIsland(fields);

      const result = [1, 1, 1, 1];

      expect(values).toEqual(result);
    });
  });

  describe("when the fields is ['Or']", () => {

    it('should return [1]', () => {
      const fields = [{ condition: 'Or' as const }];

      const values = instance.getIsland(fields);

      const result = [1];

      expect(values).toEqual(result);
    });
  });
});
