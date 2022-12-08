export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('Такой объект существует');
    } else {
      this.members.add(member);
    }
    return this.members;
  }

  addAll(...members) {
    for (const member of members) {
      this.members.add(member);
    }
    return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }
}
