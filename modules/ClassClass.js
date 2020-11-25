class Class {
  constructor(
    trainer,
    name,
    description,
    closureMessage,
    scheduled,
    duration,
    classType,
    difficulty,
    url,
    equipment
  ) {
    this.trainer = trainer;
    this.name = name;
    this.description = description;
    this.closureMessage = closureMessage;
    this.scheduled = scheduled;
    this.duration = duration;
    this.classType = classType;
    this.difficulty = difficulty;
    this.url = url;
    this.equipment = equipment;
  }
}

module.exports = Class;
