/**
 * Interface que representa um objeto com um identificador numérico.
 * 
 * Esta interface define uma propriedade `id` que é um número. 
 * É útil para garantir que os objetos tenham um identificador único.
 * 
 * @example
 * const item: IId = {
 *     id: 1
 * };
 * 
 * @see {@link https://www.typescriptlang.org/docs/handbook/interfaces.html|TypeScript Interfaces}
 */
export interface IId {
  /**
   * O identificador numérico do objeto.
   */
  id: number;
}
