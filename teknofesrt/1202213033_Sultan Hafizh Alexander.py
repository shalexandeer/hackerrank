class Menu:

    total_menu = 0

    def __init__(self,name,items):
        print("Instance dari class menu dibuat")
        self.name = name
        self.items = items
        Menu.total_menu += 1

    def getMenuName(self):
        print(self.name)

    def getMenuItems(self):
        for item in self.items:
            print(item)

    def calculateMenuPrice(self):
        total_price = 0
        for item in self.items:
            total_price += self.items[item]
        return total_price

    def calculatePurchasedItems(self, purchased_items):
        total_price = 0
        for item in purchased_items:
            total_price += purchased_items[item]
        return total_price

    def getMyPurchase(self, purchased_items):
        print("Aku memesan: ")
        for item in purchased_items:
            print(item)

list_items = {
    "Kopi" : 5000,
    "Teh" : 7000,
    "Susu" : 8000
}
list_makanan = {
    "Nasgor" : 15000,
    "Bacang" : 3000,
    "Jasuke" : 10000
}
pesananku = {
    "Nasgor": 15000,
    "Teh" : 7000
}
print(Menu.total_menu)

# Buatlah object menu
minuman = Menu("Minuman", list_items)
makanan = Menu("Makanan", list_makanan)

minuman.getMenuName()
minuman.getMenuItems()

# print(minuman.calculateMenuPrice())
# print(makanan.calculateMenuPrice())
# print(makanan.calculatePurchasedItems(pesananku))

makanan.getMyPurchase(pesananku)
print("Total Harga: ", makanan.calculatePurchasedItems[pesananku])