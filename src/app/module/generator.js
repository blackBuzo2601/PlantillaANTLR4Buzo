/**
 * GrammarName es el nombre que tendrá la gramática
 * se debe remplazar en las importaciones
 */
import antlr4 from "antlr4";
import ArrayInitLexer from "../../grammar/ArrayInitLexer.js";
import ArrayInitParser from "../../grammar/ArrayInitParser.js";
import CustomVisitor from "../helper/CustomVisitor.js";

export const analizar = (input) => {
  const chars = new antlr4.InputStream(input);
  const lexer = new ArrayInitLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ArrayInitParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.file();
  const customVisitor = new CustomVisitor();

  return customVisitor.visitFile(tree);
};