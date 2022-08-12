#
# @lc app=leetcode.cn id=889 lang=python3
#
# [889] 根据前序和后序遍历构造二叉树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def constructFromPrePost(self, preorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if not preorder:
            return None
        root = TreeNode(preorder[0])
        if len(preorder) == 1:
            return root
        idx = postorder.index(preorder[1])
        root.left = self.constructFromPrePost(preorder[1:idx+2],postorder[:idx+1])
        root.right = self.constructFromPrePost(preorder[idx+2:],postorder[idx+1:-1])
        return root

# @lc code=end
