import { Entity, PrimaryKey, Property, StringType } from "@mikro-orm/core";

export class Author {

    @Property()
    @Unique()
    email!: string;
  
    @Index() // generated name
    @Property()
    age?: number;
  
    @Index({ name: 'born_index' })
    @Property()
    born?: string;
  
  }
  
  
  
