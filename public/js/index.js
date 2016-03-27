/* global angular */
angular.module('bookApp', [])
  .controller('booktControl', function ($scope) {
    $scope.bookharry = [
      {
        id: 1,
        namebook: 'แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์',
        price: 100,
        img: 'h1.jpg',
        amount: 1
      }, {
        id: 2,
        namebook: 'แฮร์รี่ พอตเตอร์ กับห้องแห่งความลับ',
        price: 100,
        img: 'h2.jpg',
        amount: 1
      }, {
        id: 3,
        namebook: 'แฮร์รี่ พอตเตอร์ กับนักโทษแห่งอัซคาบัน',
        price: 100,
        img: 'h3.jpg',
        amount: 1
      }, {
        id: 4,
        namebook: 'แฮร์รี่ พอตเตอร์ กับถ้วยอัคนี',
        price: 100,
        img: 'h4.jpg',
        amount: 1
      }, {
        id: 5,
        namebook: 'แฮร์รี่ พอตเตอร์ กับภาคีนกฟีนิกซ์',
        price: 100,
        img: 'h5.jpg',
        amount: 1
      }, {
        id: 6,
        namebook: 'แฮร์รี่ พอตเตอร์ กับเจ้าชายเลือดผสม',
        price: 100,
        img: 'h6.jpg',
        amount: 1
      }, {
        id: 7,
        namebook: 'แฮร์รี่ พอตเตอร์ กับเครื่องรางยมทูต',
        price: 100,
        img: 'h7.jpg',
        amount: 1
      }]

    $scope.selectbook = []

    $scope.add = function (book) {
      if ($scope.checkaddbook(book.id)) {
        $scope.selectbook[$scope.checkindex(book.id)].amount++
      } else {
        $scope.selectbook.push(book)
      }
      $scope.cal()
      $scope.discount()

      // $scope.sell = 0
      // var countlist = 0
      // var exit = 0

      // $scope.selectbook.sort(function(a, b) {
      //   if (a.amount > b.amount) return -1
      //   if (a.amount < b.amount) return 1
      //   return 0
      // })
      // $scope.amount = []
      //   for (var i = 0;i<$scope.selectbook.length; i++) {
      //     $scope.amount.push($scope.selectbook[i].amount)
      //   }
      // $scope.cal()
      // console.log($scope.amount)

      // do {

      //   for (var i = 0; i < $scope.amount.length; i++) {
      //     if ($scope.amount[i] !== 0) {
      //       countlist += 1
      //     }
      //      if ($scope.amount[i] === 0) {
      //       countlist += 0
      //       break
      //     }

      //   }

      //   if (countlist === 1) {
      //     console.log('1')
      //   }
      //   if (countlist === 2) {
      //     $scope.sell += ((countlist * 100) * 0.1)
      //     console.log('2')
      //   } else if (countlist === 3) {
      //     $scope.sell += ((countlist * 100) * 0.2)
      //     console.log('3')
      //   } else if (countlist === 4) {
      //     $scope.sell += ((countlist * 100) * 0.3)
      //     console.log('4')
      //   } else if (countlist === 5) {
      //     $scope.sell += ((countlist * 100) * 0.4)
      //     console.log('5')
      //   } else if (countlist === 6) {
      //     $scope.sell += ((countlist * 100) * 0.5)
      //     console.log('6')
      //   } else if (countlist === 7) {
      //     $scope.sell += ((countlist * 100) * 0.6)
      //     console.log('7')
      //   } else if (countlist === 0) {
      //     exit = 1
      //     console.log('exit')
      //   }

      //   for (var o = 0; o < $scope.amount.length; o++) {
      //     if ($scope.amount[o] > 0) {
      //       $scope.amount[o] -= 1
      //       countlist = 0
      //     }
      //   }

      // } while (exit !== 1)

      // ////////////////////////////////////////////////////////////////////////////////////////////
      console.log('selectbook ' + $scope.selectbook)
    }

    $scope.deletebook = function (index) {
      if ($scope.selectbook[index].amount > 1) {
        $scope.selectbook[index].amount -= 1
      } else {
        $scope.selectbook.splice(index, 1)
      }
      $scope.cal()
      $scope.discount()
    }

    $scope.cal = function () {
      $scope.sumprice = 0
      for (var i = 0; i < $scope.selectbook.length; i++) {
        $scope.sumprice += $scope.selectbook[i].amount * 100
      }
    }

    console.log($scope.sumprice)

    $scope.checkaddbook = function (id) {
      for (var i = 0; i < $scope.selectbook.length; i++) {
        if ($scope.selectbook[i].id === id) {
          return true
        }
      }
    }

    $scope.checkindex = function (id) {
      for (var i = 0; i < $scope.selectbook.length; i++) {
        if ($scope.selectbook[i].id === id) {
          return i
        }
      }
    }

    $scope.discount = function () {
      $scope.sell = 0
      var countlist = 0
      var exit = 0

      $scope.selectbook.sort(function (a, b) {
        if (a.amount > b.amount) return -1
        if (a.amount < b.amount) return 1
        return 0
      })
      $scope.amount = []
      for (var i = 0; i < $scope.selectbook.length; i++) {
        $scope.amount.push($scope.selectbook[i].amount)
      }
      $scope.cal()
      console.log($scope.amount)

      do {
        for (var n = 0; n < $scope.amount.length; n++) {
          if ($scope.amount[n] !== 0) {
            countlist += 1
          }
          if ($scope.amount[n] === 0) {
            countlist += 0
            break
          }
        }

        if (countlist === 1) {
          console.log('1')
        }
        if (countlist === 2) {
          $scope.sell += ((countlist * 100) * 0.1)
          console.log('2')
        } else if (countlist === 3) {
          $scope.sell += ((countlist * 100) * 0.2)
          console.log('3')
        } else if (countlist === 4) {
          $scope.sell += ((countlist * 100) * 0.3)
          console.log('4')
        } else if (countlist === 5) {
          $scope.sell += ((countlist * 100) * 0.4)
          console.log('5')
        } else if (countlist === 6) {
          $scope.sell += ((countlist * 100) * 0.5)
          console.log('6')
        } else if (countlist === 7) {
          $scope.sell += ((countlist * 100) * 0.6)
          console.log('7')
        } else if (countlist === 0) {
          exit = 1
          console.log('exit')
        }

        for (var o = 0; o < $scope.amount.length; o++) {
          if ($scope.amount[o] > 0) {
            $scope.amount[o] -= 1
            countlist = 0
          }
        }
      } while (exit !== 1)
    }
  })
