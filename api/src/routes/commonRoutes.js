const express = require("express");
const router = express.Router();
const commonController = require("../controllers/commonController");

/**
 * @swagger
 * /api/common/getProvince:
 *   get:
 *     summary: Get list of provinces
 *     tags: [Common]
 *     parameters:
 *       - in: query
 *         name: province_id
 *         schema:
 *           type: integer
 *         description: The ID of the province
 *     responses:
 *       200:
 *         description: A list of provinces
 *       500:
 *         description: Error retrieving provinces
 */
router.get("/getProvince", commonController.getProvinces);

/**
 * @swagger
 * /api/common/getConditions:
 *   get:
 *     summary: Get list of active conditions
 *     tags: [Common]
 *     responses:
 *       200:
 *         description: A list of active conditions
 *       500:
 *         description: Error retrieving conditions
 */
router.get("/getConditions", commonController.getConditions);

/**
 * @swagger
 * /api/common/getProductPrices:
 *   get:
 *     summary: Get product prices
 *     tags: [Common]
 *     parameters:
 *       - in: query
 *         name: agent_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the agent
 *       - in: query
 *         name: yards_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the yard
 *       - in: query
 *         name: size
 *         schema:
 *           type: string
 *         required: true
 *         description: The size of the product
 *     responses:
 *       200:
 *         description: A list of product prices
 *       400:
 *         description: Missing required query parameters
 *       500:
 *         description: Error retrieving product prices
 */
router.get("/getProductPrices", commonController.getProductPrices);

module.exports = router;
