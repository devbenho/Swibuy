import { Entity, PrimaryKey, Property } from "@mikro-orm/core"
import { ApiHideProperty } from "@nestjs/swagger"
import { randomUUID } from "crypto"

@Entity({ abstract: true })
export abstract class BaseEntity {
  @ApiHideProperty()
  @PrimaryKey({ hidden: true })
  id!: number

  /**
   *  The unique id of the entity
   */
  @Property({ index: true })
  idx?: string = randomUUID()

  /**
   *  To enable or disable the entity
   */
  @Property()
  isActive? = true

  /**
   *  Marked true when entity is soft deleted
   */
  @Property({ hidden: true, index: true })
  isDeleted? = false

  /**
   *  The date that the entity was soft-deleted. Nullable because it's not set until the entity is soft-deleted.
   */
  @Property()
  deletedAt?: Date | null

    /**
     *  The date that the entity was created
     */
    @Property({ hidden: true })
    createdAt = new Date()
    
    /**
     *  The date that the entity was last updated
     */
    @Property({ hidden: true })
    updatedAt = new Date()
}
