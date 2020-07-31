class Range {
  readonly inclusiveLowerBound: Readonly<number>;
  readonly exclusiveUpperBound: Readonly<number>;

  constructor(
    inclusiveLowerBound: Readonly<number>,
    exclusiveUpperBound: Readonly<number>
  ) {
    if (inclusiveLowerBound >= exclusiveUpperBound) {
      throw TypeError(
        `inclusiveLowerBound must be strictly less than exclusiveUpperBound: ${inclusiveLowerBound} >= ${exclusiveUpperBound}`
      );
    }

    this.inclusiveLowerBound = inclusiveLowerBound;
    this.exclusiveUpperBound = exclusiveUpperBound;
  }

  isWithinRange(n: Readonly<number>): boolean {
    // console.log("this.inclusiveLowerBound: " + this.inclusiveLowerBound);
    // console.log("n: " + n);
    // console.log("this.exclusiveUpperBound: " + this.exclusiveUpperBound);

    return this.inclusiveLowerBound <= n && n < this.exclusiveUpperBound;
  }
}

export { Range };