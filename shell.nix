let
  nixpkgs = import (builtins.fetchTarball {
    url = "https://github.com/NixOS/nixpkgs/archive/refs/tags/22.05.tar.gz";
    sha256 = "0d643wp3l77hv2pmg2fi7vyxn4rwy0iyr8djcw1h5x72315ck9ik";
  }) { };
in nixpkgs.mkShell {
  name = "minecljs";
  buildInputs = [
    nixpkgs.clojure
    nixpkgs.nodejs
    nixpkgs.leiningen
  ];
  shellHook = ''
  '';
}