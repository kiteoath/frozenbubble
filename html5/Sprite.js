/*
 *                 [[ Frozen-Bubble ]]
 *
 * Copyright (c) 2000-2003 Guillaume Cottenceau.
 * Java sourcecode - Copyright (c) 2003 Glenn Sanson.
 *
 * This code is distributed under the GNU General Public License
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2, as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 675 Mass Ave, Cambridge, MA 02139, USA.
 *
 *
 * Artwork:
 *    Alexis Younes <73lab at free.fr>
 *      (everything but the bubbles)
 *    Amaury Amblard-Ladurantie <amaury at linuxfr.org>
 *      (the bubbles)
 *
 * Soundtrack:
 *    Matthias Le Bidan <matthias.le_bidan at caramail.com>
 *      (the three musics and all the sound effects)
 *
 * Design & Programming:
 *    Guillaume Cottenceau <guillaume.cottenceau at free.fr>
 *      (design and manage the project, whole Perl sourcecode)
 *
 * Java version:
 *    Glenn Sanson <glenn.sanson at free.fr>
 *      (whole Java sourcecode, including JIGA classes
 *             http://glenn.sanson.free.fr/jiga/)
 *
 * Android port:
 *    Pawel Aleksander Fedorynski <pfedor@fuw.edu.pl>
 *    Copyright (c) Google Inc.
 *
 *          [[ http://glenn.sanson.free.fr/fb/ ]]
 *          [[ http://www.frozen-bubble.org/   ]]
 */

function Sprite(spriteArea) {
  this.spriteArea = spriteArea;
  this.saved_id = -1;
}

Sprite.prototype.changeSpriteArea = function changeSpriteArea(newArea) {
  this.spriteArea = newArea;
}


Sprite.prototype.relativeMove = function relativeMove(x, y) {
  var spriteArea = this.spriteArea;
  spriteArea = this.spriteArea = new Rect(spriteArea);
  spriteArea.offset(x, y);
};

Sprite.prototype.absoluteMove = function absoluteMove(p) {
  var spriteArea = this.spriteArea;
  spriteArea = this.spriteArea = new Rect(spriteArea);
  spriteArea.offsetTo(p.x, p.y);
};

Sprite.prototype.getSpritePosition = function getSpritePosition() {
  var spriteArea = this.spriteArea;
  return new Point(spriteArea.left, spriteArea.top);
};

Sprite.prototype.getSpriteArea = function getSpriteArea() {
  var spriteArea = this.spriteArea;
  return spriteArea;
};

Sprite.drawImage = function drawImage(image, x, y, c, scale, dx, dy) {
  c.drawBitmap(image.bmp, (x * scale + dx), (y * scale + dy), null);  
};

Sprite.drawImageClipped = function drawImageClipped(image, x, y, clipr,
                                                    c, scale, dx, dy) {
  c.save(Canvas.CLIP_SAVE_FLAG);
  c.clipRect((clipr.left * scale + dx),
             (clipr.top * scale + dy),
             (clipr.right * scale + dx),
             (clipr.bottom * scale + dy),
             Region.Op.REPLACE);
  c.drawBitmap(image.bmp, (x * scale + dx), (y * scale + dy), null);
  c.restore();  
}
