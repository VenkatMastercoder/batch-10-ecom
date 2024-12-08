-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "discount_percentage" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "minimum_order_quantity" TEXT NOT NULL,
    "return_policy" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "stock" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_id_key" ON "Product"("product_id");
