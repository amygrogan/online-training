/*
  ****
  FACTORY PATTERN
  - creating an interface for creating an objects but we can let subclasses define 
    which classes to instantiate.
  - used in applications to manage and maintain and manipulate collections of objs 
    that are different but at the same time have many common characteristics.
  - EX: a member - paid membership pp or website. Where your members would have diff
    types but still have the same properties and methods.
 ****
*/


function MemberFactory() {
    this.createMember = function(name, type) {
        let member;

        if(type === 'simple') {
            member = new SimpleMembership(name);
        } else if (type === 'standard') {
            member = new StandardMembership(name);
        } else if (type === 'super') {
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define = function() {
          console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
}

const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$15';
}

const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('john doe', 'simple'));
members.push(factory.createMember('chris jackson', 'super'));
members.push(factory.createMember('janis williams', 'simple'));
members.push(factory.createMember('tom smith', 'standard'));

// console.log(members);

members.forEach(function(member) {
  member.define();
})