/* * * * * * * * * * *  JCANVAS.JS  * * * * * * * * * * * #
 *
 *  @todo
 *    Library for control over objects. It's game oriented.
 *
 *  @author
 *    Erik Martinez <erik.mj69@gmail.com>
 *
 *  @license
 *    Copyright (C) 2016 Erik Martinez
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var Canvas = {

  _: document.getElementById("statsChart"),

  getData: function() {
    
  },

  draw: function(data) {
    var h = Canvas._.clientHeight;

    if(Canvas._.getContext) {
      var ctx = Canvas._.getContext('2d');

      ctx.strokeStyle = "white";
      ctx.fillStyle = "#00aac1";
      ctx.beginPath();
      ctx.moveTo(0, Math.round(h / 2));
      ctx.lineTo(20, 60);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(20, 60, 3, 0, Math.PI*2, false);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(20, 60);
      ctx.lineTo(40, 50);
      ctx.closePath();
      ctx.stroke();
    }
  },

}