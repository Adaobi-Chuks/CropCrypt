// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract AssetManager {
    address public owner;

    struct Asset {
        address creator;
        uint256 totalShares;
        uint256 availableShares;
        uint256 pricePerShare;
        bool active;
    }

    struct AssetDetail {
        uint256 assetId;
        address creator;
        uint256 totalShares;
        uint256 availableShares;
        uint256 pricePerShare;
        bool active;
    }

    Asset[] public assets;
    mapping(address => mapping(uint256 => uint256)) public userShares; // user => assetId => shares owned
    mapping(address => uint256[]) public userAssets; // Track assets created by users

    event AssetCreated(
        uint256 indexed assetId,
        address indexed creator,
        uint256 totalShares,
        uint256 pricePerShare
    );
    event AssetDeactivated(uint256 indexed assetId);
    event AssetPurchased(
        uint256 indexed assetId,
        address indexed buyer,
        uint256 sharesPurchased,
        uint256 totalPrice
    );
    event AssetEnded(uint256 indexed assetId);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyAssetCreator(uint256 assetId) {
        require(
            assets[assetId].creator == msg.sender,
            "Not the asset creator"
        );
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Function to create a new asset
    function createAsset(uint256 totalShares, uint256 pricePerShare) external {
        require(totalShares > 0, "Total shares must be greater than zero");
        require(pricePerShare > 0, "Price per share must be greater than zero");

        assets.push(
            Asset({
                creator: msg.sender,
                totalShares: totalShares,
                availableShares: totalShares,
                pricePerShare: pricePerShare,
                active: true
            })
        );

        uint256 assetId = assets.length - 1;
        userAssets[msg.sender].push(assetId);

        emit AssetCreated(assetId, msg.sender, totalShares, pricePerShare);
    }

    // Function to buy shares of an asset
    function buyShares(uint256 assetId, uint256 shares) external payable {
        Asset storage asset = assets[assetId];
        require(asset.active, "Asset is not active");
        require(shares > 0, "Must buy at least one share");
        require(
            shares <= asset.availableShares,
            "Not enough shares available"
        );

        uint256 totalPrice = shares * asset.pricePerShare;
        require(msg.value >= totalPrice, "Insufficient payment");

        // Update the available shares and track user ownership
        asset.availableShares -= shares;
        userShares[msg.sender][assetId] += shares;

        // Refund any excess payment
        if (msg.value > totalPrice) {
            payable(msg.sender).transfer(msg.value - totalPrice);
        }

        emit AssetPurchased(assetId, msg.sender, shares, totalPrice);
    }

    // Function to deactivate an asset (creator can end the sale)
    function deactivateAsset(
        uint256 assetId
    ) external onlyAssetCreator(assetId) {
        Asset storage asset = assets[assetId];
        require(asset.active, "Asset is not active");

        asset.active = false;

        emit AssetDeactivated(assetId);
    }

    // Retrieve all assets
    function getAssets() external view returns (Asset[] memory) {
        return assets;
    }

    // Retrieve all assets created by a particular user
    function getUserAssets(
        address user
    ) external view returns (AssetDetail[] memory) {
        uint256[] memory userAssetIds = userAssets[user];
        AssetDetail[] memory userAssetDetails = new AssetDetail[](
            userAssetIds.length
        );

        for (uint256 i = 0; i < userAssetIds.length; i++) {
            uint256 assetId = userAssetIds[i];
            Asset storage asset = assets[assetId];
            userAssetDetails[i] = AssetDetail({
                assetId: assetId,
                creator: asset.creator,
                totalShares: asset.totalShares,
                availableShares: asset.availableShares,
                pricePerShare: asset.pricePerShare,
                active: asset.active
            });
        }

        return userAssetDetails;
    }

    // Retrieve the number of shares a user owns in a particular asset
    function getUserShares(
        address user,
        uint256 assetId
    ) external view returns (uint256) {
        return userShares[user][assetId];
    }
}