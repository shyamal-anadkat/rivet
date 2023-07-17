import { ChartNode } from './NodeBase.js';
import { NodeRegistration } from './NodeRegistration.js';
import { NodeImpl } from './NodeImpl.js';

import { userInputNode } from './nodes/UserInputNode.js';
export * from './nodes/UserInputNode.js';

import { textNode } from './nodes/TextNode.js';
export * from './nodes/TextNode.js';

import { chatNode } from './nodes/ChatNode.js';
export * from './nodes/ChatNode.js';

import { promptNode } from './nodes/PromptNode.js';
export * from './nodes/PromptNode.js';

import { extractRegexNode } from './nodes/ExtractRegexNode.js';
export * from './nodes/ExtractRegexNode.js';

import { codeNode } from './nodes/CodeNode.js';
export * from './nodes/CodeNode.js';

import { matchNode } from './nodes/MatchNode.js';
export * from './nodes/MatchNode.js';

import { ifNode } from './nodes/IfNode.js';
export * from './nodes/IfNode.js';

import { readDirectoryNode } from './nodes/ReadDirectoryNode.js';
export * from './nodes/ReadDirectoryNode.js';

import { readFileNode } from './nodes/ReadFileNode.js';
export * from './nodes/ReadFileNode.js';

import { ifElseNode } from './nodes/IfElseNode.js';
export * from './nodes/IfElseNode.js';

import { chunkNode } from './nodes/ChunkNode.js';
export * from './nodes/ChunkNode.js';

import { graphInputNode } from './nodes/GraphInputNode.js';
export * from './nodes/GraphInputNode.js';

import { graphOutputNode } from './nodes/GraphOutputNode.js';
export * from './nodes/GraphOutputNode.js';

import { subGraphNode } from './nodes/SubGraphNode.js';
export * from './nodes/SubGraphNode.js';

import { arrayNode } from './nodes/ArrayNode.js';
export * from './nodes/ArrayNode.js';

import { extractJsonNode } from './nodes/ExtractJsonNode.js';
export * from './nodes/ExtractJsonNode.js';

import { assemblePromptNode } from './nodes/AssemblePromptNode.js';
export * from './nodes/ExtractYamlNode.js';

import { loopControllerNode } from './nodes/LoopControllerNode.js';
export * from './nodes/AssemblePromptNode.js';

import { trimChatMessagesNode } from './nodes/TrimChatMessagesNode.js';
export * from './nodes/LoopControllerNode.js';

import { extractYamlNode } from './nodes/ExtractYamlNode.js';
export * from './nodes/TrimChatMessagesNode.js';

import { externalCallNode } from './nodes/ExternalCallNode.js';
export * from './nodes/ExternalCallNode.js';

import { extractObjectPathNode } from './nodes/ExtractObjectPathNode.js';
export * from './nodes/ExtractObjectPathNode.js';

import { raiseEventNode } from './nodes/RaiseEventNode.js';
export * from './nodes/RaiseEventNode.js';

import { contextNode } from './nodes/ContextNode.js';
export * from './nodes/ContextNode.js';

import { coalesceNode } from './nodes/CoalesceNode.js';
export * from './nodes/CoalesceNode.js';

import { passthroughNode } from './nodes/PassthroughNode.js';
export * from './nodes/PassthroughNode.js';

import { popNode } from './nodes/PopNode.js';
export * from './nodes/PopNode.js';

import { setGlobalNode } from './nodes/SetGlobalNode.js';
export * from './nodes/SetGlobalNode.js';

import { getGlobalNode } from './nodes/GetGlobalNode.js';
export * from './nodes/GetGlobalNode.js';

import { waitForEventNode } from './nodes/WaitForEventNode.js';
export * from './nodes/WaitForEventNode.js';

import { gptFunctionNode } from './nodes/GptFunctionNode.js';
export * from './nodes/GptFunctionNode.js';

import { toYamlNode } from './nodes/ToYamlNode.js';
export * from './nodes/ToYamlNode.js';

import { getEmbeddingNode } from './nodes/GetEmbeddingNode.js';
export * from './nodes/GetEmbeddingNode.js';

import { vectorStoreNode } from './nodes/VectorStoreNode.js';
export * from './nodes/VectorStoreNode.js';

import { vectorNearestNeighborsNode } from './nodes/VectorNearestNeighborsNode.js';
export * from './nodes/VectorNearestNeighborsNode.js';

import { hashNode } from './nodes/HashNode.js';
export * from './nodes/HashNode.js';

import { abortGraphNode } from './nodes/AbortGraphNode.js';
export * from './nodes/AbortGraphNode.js';

import { raceInputsNode } from './nodes/RaceInputsNode.js';
export * from './nodes/RaceInputsNode.js';

import { toJsonNode } from './nodes/ToJsonNode.js';
export * from './nodes/ToJsonNode.js';

import { joinNode } from './nodes/JoinNode.js';
export * from './nodes/JoinNode.js';

import { filterNode } from './nodes/FilterNode.js';
export * from './nodes/FilterNode.js';

import { objectNode } from './nodes/ObjectNode.js';
export * from './nodes/ObjectNode.js';

import { booleanNode } from './nodes/BooleanNode.js';
export * from './nodes/BooleanNode.js';

import { compareNode } from './nodes/CompareNode.js';
export * from './nodes/CompareNode.js';

import { evaluateNode } from './nodes/EvaluateNode.js';
export * from './nodes/EvaluateNode.js';

import { numberNode } from './nodes/NumberNode.js';
export * from './nodes/NumberNode.js';

import { randomNumberNode } from './nodes/RandomNumberNode.js';
export * from './nodes/RandomNumberNode.js';

import { shuffleNode } from './nodes/ShuffleNode.js';
export * from './nodes/ShuffleNode.js';

const register = new NodeRegistration()
  .register(toYamlNode)
  .register(userInputNode)
  .register(textNode)
  .register(chatNode)
  .register(promptNode)
  .register(extractRegexNode)
  .register(codeNode)
  .register(matchNode)
  .register(ifNode)
  .register(readDirectoryNode)
  .register(readFileNode)
  .register(ifElseNode)
  .register(chunkNode)
  .register(graphInputNode)
  .register(graphOutputNode)
  .register(subGraphNode)
  .register(arrayNode)
  .register(extractJsonNode)
  .register(assemblePromptNode)
  .register(loopControllerNode)
  .register(trimChatMessagesNode)
  .register(extractYamlNode)
  .register(externalCallNode)
  .register(extractObjectPathNode)
  .register(raiseEventNode)
  .register(contextNode)
  .register(coalesceNode)
  .register(passthroughNode)
  .register(popNode)
  .register(setGlobalNode)
  .register(getGlobalNode)
  .register(waitForEventNode)
  .register(gptFunctionNode)
  .register(getEmbeddingNode)
  .register(vectorStoreNode)
  .register(vectorNearestNeighborsNode)
  .register(hashNode)
  .register(abortGraphNode)
  .register(raceInputsNode)
  .register(toJsonNode)
  .register(joinNode)
  .register(filterNode)
  .register(objectNode)
  .register(booleanNode)
  .register(compareNode)
  .register(evaluateNode)
  .register(numberNode)
  .register(randomNumberNode)
  .register(shuffleNode);

export type Nodes = typeof register.NodesType;

export type NodeType = typeof register.NodeTypesType;

export const createNodeInstance = <T extends Nodes>(node: T): NodeImpl<T> => {
  return register.createImpl(node);
};

export function createUnknownNodeInstance(node: ChartNode): NodeImpl<ChartNode> {
  return createNodeInstance(node as Nodes) as NodeImpl<ChartNode>;
}

export function nodeFactory<T extends NodeType>(type: T): Extract<Nodes, { type: T }> {
  return register.create(type);
}

export function getNodeTypes(): NodeType[] {
  return register.getNodeTypes();
}

export type NodeOfType<T extends NodeType> = Extract<Nodes, { type: T }>;

export function getNodeDisplayName<T extends NodeType>(type: T): string {
  return register.getDisplayName(type);
}

export function isRegisteredNodeType(type: NodeType): boolean {
  return register.isRegistered(type);
}
