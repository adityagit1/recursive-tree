export interface PersonI {
  personName: string;
  children?: PersonI[]; /* Recursive Property: Allows the interface to reference itself  */
}